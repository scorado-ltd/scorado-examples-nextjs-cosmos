'use client';

import { PrimaryButton } from "~f/framework/button";
import { toggleBlogFavoriteAction } from "./blogAction";

export default async function BlogFavoriteToggleButton({ blogId, isFavorite }: { blogId: string, isFavorite: boolean }) {
    async function toggle(blogId: string) {
        await toggleBlogFavoriteAction(blogId);
    };

    return (
        <PrimaryButton onClick={() => toggle(blogId)} style={{ minWidth: 50 }}>{isFavorite ? '❤️' : '🖤'}</PrimaryButton>
    )
}