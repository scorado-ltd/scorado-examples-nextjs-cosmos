'use client';

import { PrimaryButton } from "~f/framework/button";
import { useServerAction } from "~f/web/serverActionClient";
import { deleteBlogAction } from "./blogAction";

export default function BlogDeleteButton({ blogId }: { blogId: string }) {
    const [runAciton, isPending] = useServerAction(deleteBlogAction);

    async function deleteBlog() {
        await runAciton(blogId);
    };

    return (
        <PrimaryButton onClick={deleteBlog} style={{ minWidth: 50 }}>{isPending ? '⌛' : '✖️'}</PrimaryButton>
    )
}