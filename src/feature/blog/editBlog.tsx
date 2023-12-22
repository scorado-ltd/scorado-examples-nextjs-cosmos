import { PrimaryButton } from "~f/framework/button";
import { editBlogAction } from "./blogAction";
import { BlogPost } from "./blogApi";

interface EditBlogFormProps {
    blog: BlogPost;
}

export default function EditBlogForm({ blog }: EditBlogFormProps) {
    return (
        <form action={editBlogAction}>
            <input name="id" type="hidden" defaultValue={blog.id} />
            <label>
                <span>Title</span>
                <input name="title" type="text" placeholder="Title" defaultValue={blog.title} /><br />
            </label><br />
            <label>
                <span>Content</span>
                <textarea name="content" placeholder="Content" defaultValue={blog.content}></textarea>
            </label><br />
            <label>
                <span>Profile Image ID</span>
                <input name="profileImageId" type="text" placeholder="ID" defaultValue={blog.profileImageId} />
            </label><br />
            <label>
                <span>Banenr Image ID</span>
                <input name="bannerImageId" type="text" placeholder="ID" defaultValue={blog.bannerImageId} />
            </label><br />
            <PrimaryButton>Update</PrimaryButton>
        </form>
    )
}