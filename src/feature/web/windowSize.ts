'use client'

import { useEffect, useState } from "react"

interface WindowSize {
    width: number | undefined,
    lastWidth: number | undefined,
    height: number | undefined,
    lastHeight: number | undefined,
}
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        lastWidth: undefined,
        height: undefined,
        lastHeight: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize(state => ({
                width: window.innerWidth,
                lastWidth: state.width,
                height: window.innerHeight,
                lastHeight: state.height,
            }));
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowSize;
}