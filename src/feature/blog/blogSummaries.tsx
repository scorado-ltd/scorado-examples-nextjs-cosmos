import Link from "next/link";
import { getBlogSummaries } from "./blogApi";
import BlogDeleteButton from "./blogDeleteButton";
import BlogFavoriteToggle from "./blogFavoriteToggle";
import styles from './blogSummaries.module.scss';

export async function BlogSummaries() {
    const blogsResponse = await getBlogSummaries();
    const blogs = blogsResponse.data?.blogSummaries;

    return (
        <div className={styles.List}>
            {blogs ? blogs.map(blog => (
                <div key={blog.id} className={styles.List__item}>
                    <div className={styles.List__itemButtons}>
                        <BlogFavoriteToggle blogId={blog.id} />
                        <BlogDeleteButton blogId={blog.id} />
                    </div>
                    <div className={styles.List__itemLink}>
                        <Link href={`/blog/post/${blog.id}`} scroll={false}>{blog.title}</Link>
                    </div>
                </div>
            )) : (
                <div>No blogs found</div>
            )}
        </div>
    )
}