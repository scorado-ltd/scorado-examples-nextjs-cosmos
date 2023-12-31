'use server';

import { revalidateTag } from "next/cache";
import { BLOG_FAVORITES_CACHE_TAG, BLOG_SUMMARIES_CACHE_TAG, crupdateBlog, deleteBlog, getBlog, getBlogCacheTag, toggleBlogFavorite } from "./blogApi";

export async function createBlogAction(formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const createdAt = new Date();
    const updatedAt = createdAt;

    if (!title || !content) {
        return {
            success: false,
            message: 'Title and content are required'
        };
    }

    const response = await crupdateBlog({
        id,
        title,
        content,
        createdAt,
        updatedAt
    });

    if (response.ok) {
        revalidateTag(BLOG_SUMMARIES_CACHE_TAG);

        return {
            success: true,
            message: 'Blog created'
        };
    } else {
        return {
            success: false,
            message: 'Blog not created'
        };
    }
}

export async function editBlogAction(formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const profileImageId = formData.get('profileImageId') as string;
    const bannerImageId = formData.get('bannerImageId') as string;

    if (!title || !content) {
        return {
            success: false,
            message: 'Title and content are required'
        };
    }

    const blogResponse = await getBlog(id);
    const blog = blogResponse.data;
    if (!blog) {
        return {
            success: false,
            message: 'Blog not found'
        };
    }

    const createdAt = blog.createdAt;
    const updatedAt = new Date();

    const response = await crupdateBlog({
        id,
        title,
        content,
        createdAt,
        updatedAt,
        profileImageId,
        bannerImageId
    });

    if (response.ok) {
        revalidateTag(BLOG_SUMMARIES_CACHE_TAG);
        revalidateTag(getBlogCacheTag(id));

        return {
            success: true,
            message: 'Blog edited'
        };
    } else {
        return {
            success: false,
            message: 'Blog not edited'
        };
    }
}

export async function deleteBlogAction(id: string) {
    const response = await deleteBlog(id);

    if (response.ok) {
        revalidateTag(BLOG_SUMMARIES_CACHE_TAG);
        revalidateTag(BLOG_FAVORITES_CACHE_TAG);
        revalidateTag(getBlogCacheTag(id));

        return {
            success: true,
            message: 'Blog deleted'
        };
    } else {
        return {
            success: false,
            message: 'Blog not deleted'
        };
    }
}

export async function toggleBlogFavoriteAction(blogId: string) {
    await toggleBlogFavorite(blogId);

    revalidateTag(BLOG_FAVORITES_CACHE_TAG);
}