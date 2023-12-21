'use client';

import { PrimaryButton } from "~f/framework/button";
import { deleteBlogAction } from "./blogAction";

export default function BlogDeleteButton({ blogId }: { blogId: string }) {
    const deleteBlog = (blogId: string) => {
        deleteBlogAction(blogId);
    };

    return (
        <PrimaryButton onClick={() => deleteBlog(blogId)} style={{ minWidth: 50 }}>✖️</PrimaryButton>
    )
}