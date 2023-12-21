'use client';

import { startTransition, useOptimistic } from "react";
import { PrimaryButton } from "~f/framework/button";
import { toggleBlogFavoriteAction } from "./blogAction";

export default function BlogFavoriteToggleButton({ blogId, isFavorite }: { blogId: string, isFavorite: boolean }) {
    const [optimisticIsFavorite, setOptimisticIsFavorite] = useOptimistic(isFavorite);

    async function toggle() {
        startTransition(() => {
            setOptimisticIsFavorite(!optimisticIsFavorite);
        });

        await toggleBlogFavoriteAction(blogId);
    };

    return (
        <PrimaryButton onClick={toggle} style={{ minWidth: 50 }}>{optimisticIsFavorite ? '❤️' : '🖤'}</PrimaryButton>
    )
}