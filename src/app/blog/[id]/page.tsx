import { format, formatISO, getTime } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, getBlogSummaries } from "~f/blog/blogApi";
import SuspenseBlogFavoriteToggle from "~f/blog/blogFavoriteToggle";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";
import { getBannerImagePath, getProfileImagePath } from "~f/media/image";
import ImageMedia from "~f/media/imageMedia";

interface PageProps {
    params: {
        id: string;
    }
}

export const revalidate = 60; // 1 minute
export async function generateStaticParams() {
    const blogsResponse = await getBlogSummaries();
    const blogs = blogsResponse.data?.blogSummaries ?? [];
    const sortedBlogs = blogs.sort((a, b) => getTime(b.updatedAt) - getTime(a.updatedAt));
    const latestBlogs = sortedBlogs.slice(0, 3);

    return latestBlogs.map<PageProps>(blog => ({
        params: {
            id: blog.id
        }
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const blogResponse = await getBlog(params.id);

    return {
        title: blogResponse.data?.title,
        description: 'Blog Description'
    }
}

export default async function Page({ params }: PageProps) {
    const blogResponse = await getBlog(params.id);
    const blog = blogResponse.data;

    if (!blog) notFound();

    const createdAtIso = formatISO(blog.createdAt);
    const createdAtFormatted = format(blog.createdAt, 'do LLL yyyy');
    const updatedAtIso = formatISO(blog.updatedAt);
    const updatedAtFormatted = format(blog.updatedAt, 'do LLL yyyy');
    const profileImageUrl = blog.profileImageId ? getProfileImagePath(blog.profileImageId) : null;
    const bannerImageUrl = blog.bannerImageId ? getBannerImagePath(blog.bannerImageId) : null;

    return (
        <FullContainer>
            <Heading1>{blog.title}</Heading1>
            <SuspenseBlogFavoriteToggle blogId={blog.id} />
            <Link href={`/blog/${blog.id}/edit`}>Edit Blog</Link>
            <p>Created: <time dateTime={createdAtIso}>{createdAtFormatted}</time></p>
            <p>Updated: <time dateTime={updatedAtIso}>{updatedAtFormatted}</time></p>
            {profileImageUrl &&
                <div>
                    <ImageMedia src={profileImageUrl} alt={blog.title} width={50} height={50} />
                </div>
            }
            {bannerImageUrl &&
                <div>
                    <ImageMedia src={bannerImageUrl} alt={blog.title} width={500} height={200} />
                </div>
            }
            <p>{blog.content}</p>
        </FullContainer>
    )
}