import { LinkProps } from "next/link";
import { Suspense } from "react";
import { SideMenuLinkItemContainer } from "~f/framework/navigation/sideMenu/item/linkItem";
import { getBlogFavorites } from "../blogApi";
import styles from './favouritesItem.module.scss';

export interface SideMenuBlogFavouritesItemRawProps extends LinkProps {
    count: number;
}

function BlogFavouritesItem({ count, ...props }: SideMenuBlogFavouritesItemRawProps) {
    return (
        <SideMenuLinkItemContainer {...props}>
            <div className={styles.FavouritesItem}>
                <div className={styles.FavouritesItem__box}>❤️ {count}</div>
            </div>
        </SideMenuLinkItemContainer>
    )
}

interface SideMenuBlogFavouritesItemProps extends LinkProps { }

async function SideMenuBlogFavouritesItemRaw({ ...props }: SideMenuBlogFavouritesItemProps) {
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    return (
        <BlogFavouritesItem {...props} count={favoriteBlogIds.length} />
    )
}

function SideMenuBlogFavouritesItemLoading({ ...props }: SideMenuBlogFavouritesItemProps) {
    return (
        <BlogFavouritesItem {...props} count={0} />
    )
}

export default async function SideMenuBlogFavouritesItem({ ...props }: SideMenuBlogFavouritesItemProps) {
    return (
        <Suspense fallback={<SideMenuBlogFavouritesItemLoading {...props} />}>
            <SideMenuBlogFavouritesItemRaw {...props} />
        </Suspense>
    )
}