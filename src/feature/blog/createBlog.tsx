import { PrimaryButton } from "~f/framework/button";
import { createBlogAction } from "./blogAction";

export default function CreateBlogForm() {
    return (
        <form action={createBlogAction}>
            <label>
                <span>ID</span>
                <input name="id" type="text" placeholder="ID" /><br />
            </label><br />
            <label>
                <span>Title</span>
                <input name="title" type="text" placeholder="Title" /><br />
            </label><br />
            <label>
                <span>Content</span>
                <textarea name="content" placeholder="Content"></textarea>
            </label><br />
            <PrimaryButton>Create</PrimaryButton>
        </form>
    )
}