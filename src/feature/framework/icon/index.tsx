import { HTMLAttributes } from "react";

export function ChevronIcon(props: HTMLAttributes<Element>) {
    return (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 19L15 11L6 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}