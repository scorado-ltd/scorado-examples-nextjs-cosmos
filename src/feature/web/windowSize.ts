'use client'

import { useEffect, useState } from "react"

interface WindowSize {
    width: number | undefined,
    height: number | undefined
}
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        height: undefined,
        width: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowSize;
}