'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouterLogger() {
    const pathname = usePathname();

    // detect route change with useEffect dependency
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(x => x + 1);
        console.log('route change with dependency', pathname);
    }, [pathname]);

    return (
        <ul>
            <li>Route change count with useEffect dependency: {count}</li>
            {/* <li>routeChangeStart event count: {startCount}</li>
            <li>routeChangeComplete event count: {completeCount}</li> */}
            <li>Current route: {pathname}</li>
        </ul>
    )
}