import { HTMLAttributes } from "react";

export function ChevronIcon(props: HTMLAttributes<Element>) {
    return (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 19L15 11L6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function DiscoverIcon(props: HTMLAttributes<Element>) {
    return (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.92201 5.00752C3.58493 5.99243 1.94434 8.30463 1.94434 11C1.94434 13.6954 3.58493 16.0076 5.92201 16.9925C7.00447 17.9506 8.34843 18.6199 9.83325 18.8799C9.38215 18.9588 8.91805 19 8.44434 19C4.02606 19 0.444336 15.4183 0.444336 11C0.444336 6.58172 4.02606 3 8.44434 3C8.91805 3 9.38215 3.04117 9.83325 3.12014C8.34843 3.38005 7.00447 4.0494 5.92201 5.00752Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.69984 5.00752C6.36276 5.99243 4.72217 8.30463 4.72217 11C4.72217 13.6954 6.36276 16.0076 8.69984 16.9925C9.7823 17.9506 11.1263 18.6199 12.6111 18.8799C12.16 18.9588 11.6959 19 11.2222 19C6.80389 19 3.22217 15.4183 3.22217 11C3.22217 6.58172 6.80389 3 11.2222 3C11.6959 3 12.16 3.04117 12.6111 3.12014C11.1263 3.38005 9.7823 4.0494 8.69984 5.00752Z" fill="currentColor" />
            <circle cx="14" cy="11" r="7.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}

export function CreateIcon(props: HTMLAttributes<Element>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" {...props}>
            <circle cx="11" cy="11" r="8.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function AccountIcon(props: HTMLAttributes<Element>) {
    return (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="11" cy="11" r="8.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14.1111 15V14.1112C14.1111 13.6397 13.9501 13.1875 13.6636 12.8541C13.3771 12.5207 12.9885 12.3334 12.5833 12.3334H9.52778C9.12259 12.3334 8.73399 12.5207 8.44748 12.8541C8.16096 13.1875 8 13.6397 8 14.1112V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function MagnifyingGlassIcon(props: HTMLAttributes<Element>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none" {...props}>
            <path d="M8.55556 16.1111C12.7284 16.1111 16.1111 12.7284 16.1111 8.55556C16.1111 4.38274 12.7284 1 8.55556 1C4.38274 1 1 4.38274 1 8.55556C1 12.7284 4.38274 16.1111 8.55556 16.1111Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9999 18L13.8916 13.8917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}