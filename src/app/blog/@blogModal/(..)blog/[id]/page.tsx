import { format, formatISO } from "date-fns";
import Link from "next/link";
import { getBlog } from "~f/blog/blogApi";
import BlogFavoriteToggle from "~f/blog/blogFavoriteToggle";
import { RouterModal } from "~f/framework/modal";
import DynamicImage from "~f/media/dynamicImage";
import { getBannerImagePath, getProfileImagePath } from "~f/media/image";
import styles from "./page.module.scss";

interface PageProps {
    params: {
        id: string;
    }
}

export default async function Page({ params }: PageProps) {
    const blogResponse = await getBlog(params.id);
    const blog = blogResponse.data;

    if (!blog) return null;

    const updatedAtIso = formatISO(blog.updatedAt);
    const updatedAtFormatted = format(blog.updatedAt, 'do LLL yyyy');
    const profileImageUrl = blog.profileImageId ? getProfileImagePath(blog.profileImageId) : null;
    const bannerImageUrl = blog.bannerImageId ? getBannerImagePath(blog.bannerImageId) : null;

    return (
        <RouterModal
            header={blog.title}
        >
            <BlogFavoriteToggle blogId={blog.id} />
            <Link href={`/blog/${blog.id}/edit`}>Edit Blog</Link>
            <p>Updated: <time dateTime={updatedAtIso}>{updatedAtFormatted}</time></p>
            {profileImageUrl &&
                <div className={styles.ProfileImage}>
                    <DynamicImage
                        src={profileImageUrl}
                        alt={blog.title}
                        width={100}
                        height={100}
                        placeholder='blur'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            }
            {bannerImageUrl &&
                <div className={styles.BannerImage}>
                    <div className={styles.BannerImage__image}>
                        <DynamicImage
                            src={bannerImageUrl}
                            alt={blog.title}
                            width={640}
                            height={360}
                            placeholder='blur'
                            style={{ width: '100%', height: 'auto' }}
                            sizes="100vw"
                        />
                    </div>
                </div>
            }
        </RouterModal>
    )
}