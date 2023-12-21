import { StatusCodes } from "http-status-codes";
import { ApiResponse, callApi } from "~f/jsonbin";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
    });

    return response;
}

export async function getBlogSummaries(): Promise<ApiResponse<Blogs>> {
    const response = await callApi<Blogs>({
        endpoint: "blogs",
        method: "GET",
        revalidate: 3600,
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

export const BLOG_FAVORITES_CACHE_TAG = "blogFavorites";

export interface BlogFavorites {
    blogIds: string[]
}

export async function setBlogFavorites(blogIds: string[]): Promise<ApiResponse<unknown>> {
    const blogFavorites: BlogFavorites = {
        blogIds: blogIds
    };

    const response = await callApi<unknown>({
        endpoint: "blog-favorites",
        method: "POST",
        bodyJson: blogFavorites,
    });

    return response;
}

export async function getBlogFavorites(): Promise<ApiResponse<BlogFavorites>> {
    const response = await callApi<BlogFavorites>({
        endpoint: "blog-favorites",
        method: "GET",
        revalidate: 3600,
        cacheTags: [BLOG_FAVORITES_CACHE_TAG]
    });

    if (response.status === StatusCodes.NOT_FOUND) {
        await setBlogFavorites([]);

        return await getBlogFavorites();
    }

    return response;
}

export async function addBlogFavorite(id: string): Promise<void> {
    const response = await getBlogFavorites();

    if (response.ok) {
        const existingBlogIds = response.data?.blogIds ?? [];

        if (!existingBlogIds.includes(id)) {
            existingBlogIds.push(id);
        }

        await setBlogFavorites(existingBlogIds);
    }
}

export async function deleteBlogFavorite(id: string): Promise<void> {
    const response = await getBlogFavorites();

    if (response.ok) {
        const existingBlogIds = response.data?.blogIds ?? [];
        const updatedBlogIds: string[] = [];

        for (const blogId of existingBlogIds) {
            if (blogId !== id) {
                updatedBlogIds.push(blogId);
            }
        }

        await setBlogFavorites(updatedBlogIds);
    }
}

export async function toggleBlogFavorite(blogId: string): Promise<boolean> {
    const blogFavoritesResponse = await getBlogFavorites();

    if (blogFavoritesResponse.ok) {
        const existingBlogIds = blogFavoritesResponse.data?.blogIds ?? [];
        const isFavorite = existingBlogIds.includes(blogId);

        if (isFavorite) {
            await deleteBlogFavorite(blogId);
        } else {
            await addBlogFavorite(blogId);
        }

        return !isFavorite;
    }

    return false;
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
    });

    if (response.ok) {
        await updateBlogSummary(blogPost);
    }

    return response;
}

export async function getBlog(id: string): Promise<ApiResponse<BlogPost>> {
    const response = await callApi<BlogPost>({
        endpoint: `blog-${id}`,
        method: "GET",
        revalidate: 3600,
        cacheTags: [getBlogCacheTag(id)]
    });

    return response;
}

export async function deleteBlog(id: string): Promise<ApiResponse<unknown>> {
    const response = await callApi<unknown>({
        endpoint: `blog-${id}`,
        method: "DELETE",
    });

    if (response.ok) {
        await deleteBlogSummary(id);
        await deleteBlogFavorite(id);
    }

    return response;
}