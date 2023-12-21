'use client';

import { useOptimistic } from "react";
import { PrimaryButton } from "~f/framework/button";
import { toggleBlogFavoriteAction } from "./blogAction";

export default async function BlogFavoriteToggleButton({ blogId, isFavorite }: { blogId: string, isFavorite: boolean }) {
    const [optimisticIsFavorite, setOptimisticIsFavorite] = useOptimistic(isFavorite);

    async function toggle() {
        setOptimisticIsFavorite(!optimisticIsFavorite);
        await toggleBlogFavoriteAction(blogId);
    };

    return (
        <PrimaryButton onClick={toggle} style={{ minWidth: 50 }}>{optimisticIsFavorite ? '❤️' : '🖤'}</PrimaryButton>
    )
}