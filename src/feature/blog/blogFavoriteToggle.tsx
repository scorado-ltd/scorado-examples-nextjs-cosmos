'use client';

import { useEffect, useState } from "react";
import { PrimaryButton } from "~f/framework/button";
import { isBlogFavorite, toggleBlogFavorite } from "./blogClient";

export default function BlogFavoriteToggle({ blogId }: { blogId: string }) {
    const [isFavorite, setIsFavorite] = useState(false);

    function toggle(blogId: string) {
        const toggled = toggleBlogFavorite(blogId);
        setIsFavorite(toggled);
    };

    useEffect(() => {
        const toggled = isBlogFavorite(blogId);
        setIsFavorite(toggled);
    }, [isFavorite, isBlogFavorite])

    return (
        <PrimaryButton onClick={() => toggle(blogId)} style={{ minWidth: 50 }}>{isFavorite ? '❤️' : '🖤'}</PrimaryButton>
    )
}