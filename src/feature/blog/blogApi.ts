import { StatusCodes } from "http-status-codes";
import { ApiResponse, callApi } from "~f/jsonbin";

export const BLOG_SUMMARIES_CACHE_TAG = "blogSummaries";

export interface Blogs {
    blogSummaries: BlogPostSummary[]
}
export interface BlogPostSummary {
    id: string,
    title: string,
    createdAt: Date,
    updatedAt: Date,
}

async function setBlogSummaries(blogSummaries: BlogPostSummary[]): Promise<ApiResponse<unknown>> {
    const blogs: Blogs = {
        blogSummaries: blogSummaries
    };

    const response = await callApi<unknown>({
        endpoint: "blogs",
        method: "POST",
        bodyJson: blogs,
        cacheTags: [BLOG_SUMMARIES_CACHE_TAG]
    });

    return response;
}

export async function getBlogSummaries(): Promise<ApiResponse<Blogs>> {
    const response = await callApi<Blogs>({
        endpoint: "blogs",
        method: "GET",
        cacheTags: [BLOG_SUMMARIES_CACHE_TAG]
    });

    if (response.status === StatusCodes.NOT_FOUND) {
        await setBlogSummaries([]);

        return await getBlogSummaries();
    }

    return response;
}

async function updateBlogSummary(blogPostSummary: BlogPostSummary): Promise<void> {
    const blogsResponse = await getBlogSummaries();

    if (blogsResponse.ok) {
        const existingBlogs = blogsResponse.data?.blogSummaries ?? [];
        const updatedBlogs: BlogPostSummary[] = [];
        const updatedBlogSummary: BlogPostSummary = {
            id: blogPostSummary.id,
            title: blogPostSummary.title,
            createdAt: blogPostSummary.createdAt,
            updatedAt: blogPostSummary.updatedAt
        };
        let blogUpdated = false;

        for (const blog of existingBlogs) {
            if (blog.id === updatedBlogSummary.id) {
                blogUpdated = true;
                updatedBlogs.push(updatedBlogSummary);
            }
            else {
                updatedBlogs.push(blog);
            }
        }

        if (!blogUpdated) {
            updatedBlogs.push(updatedBlogSummary);
        }
        
        await setBlogSummaries(updatedBlogs);
    }
}

async function deleteBlogSummary(id: string): Promise<void> {
    const blogsResponse = await getBlogSummaries();

    if (blogsResponse.ok) {
        const existingBlogs = blogsResponse.data?.blogSummaries ?? [];
        const updatedBlogs: BlogPostSummary[] = [];

        for (const blog of existingBlogs) {
            if (blog.id !== id) {
                updatedBlogs.push(blog);
            }
        }

        await setBlogSummaries(updatedBlogs);
    }
}

const BLOG_CACHE_TAG = "blog";
export function getBlogCacheTag(id: string): string {
    return `${BLOG_CACHE_TAG}-${id}`;
}

export interface BlogPost extends BlogPostSummary {
    content: string
}

export async function crupdateBlog(blogPost: BlogPost): Promise<ApiResponse<unknown>> {
    const response = await callApi<unknown>({
        endpoint: `blog-${blogPost.id}`,
        method: "POST",
        bodyJson: blogPost,
        cacheTags: [getBlogCacheTag(blogPost.id)]
    });

    if (response.ok) {
        await updateBlogSummary(blogPost);
    }

    return response;
}

export async function getBlog(id: string) : Promise<ApiResponse<BlogPost>> {
    const response = await callApi<BlogPost>({
        endpoint: `blog-${id}`,
        method: "GET",
        cacheTags: [getBlogCacheTag(id)]
    });

    return response;
}

export async function deleteBlog(id: string) : Promise<ApiResponse<unknown>> {
    const response = await callApi<unknown>({
        endpoint: `blog-${id}`,
        method: "DELETE",
        cacheTags: [getBlogCacheTag(id)]
    });

    if (response.ok) {
        await deleteBlogSummary(id);
    }

    return response;
}