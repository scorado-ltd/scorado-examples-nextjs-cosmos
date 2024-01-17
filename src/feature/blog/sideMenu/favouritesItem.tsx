import { LinkProps } from "next/link";
import { Suspense } from "react";
import { SideMenuItemPopOutContainer } from "~f/framework/navigation/sideMenu/item/itemPopOut";
import { SideMenuLinkItemContainer } from "~f/framework/navigation/sideMenu/item/linkItem";
import { getBlogFavorites } from "../blogApi";
import styles from './favouritesItem.module.scss';

export interface SideMenuBlogFavouritesItemRawProps extends LinkProps {
    count: number;
}

function BlogFavouritesItem({ count, ...props }: SideMenuBlogFavouritesItemRawProps) {
    function PopOut() {
        return (
            <div className={styles.FavouritesItem__popOut}>
                Favourites
            </div>
        )
    }

    return (


        <div className={styles.FavouritesItem}>
            <SideMenuLinkItemContainer {...props}>
                <SideMenuItemPopOutContainer popoutContent={<PopOut />} offsetLeft={62}>
                    <div className={styles.FavouritesItem__box}>
                        <div className={styles.FavouritesItem__count}>
                            ❤️ {count}
                        </div>
                        <div className={styles.FavouritesItem__label}>
                            Favourites
                        </div>
                    </div>
                </SideMenuItemPopOutContainer>
            </SideMenuLinkItemContainer>
        </div>


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