export function toggleBlogFavorite(blogId: string) {
    const id = `blog-favorite-${blogId}`;
    const isFavorite = localStorage.getItem(id) === "true";

    if (isFavorite) {
        localStorage.removeItem(id);

        return false;
    } else {
        localStorage.setItem(id, "true");

        return true;
    }
}

export function isBlogFavorite(blogId: string) {
    const id = `blog-favorite-${blogId}`;
    const isFavorite = localStorage.getItem(id) === "true";

    return isFavorite;
}
