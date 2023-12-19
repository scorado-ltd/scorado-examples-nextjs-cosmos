'use client';

import { TertiaryButton } from "~f/framework/button";
import { deleteBlogAction } from "./blogAction";

export default function BlogDeleteButton({ blogId }: { blogId: string }) {
    return (
        <TertiaryButton onClick={() => deleteBlogAction(blogId)}>X</TertiaryButton>
    )
}