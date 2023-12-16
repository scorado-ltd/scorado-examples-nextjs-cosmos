'use client';

import { useEffect, useState } from "react";

interface ScrollPosition {
    x: number;
    y: number;
}

const useScroll = (elementId: string): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    });

    const getElement = () => {
        return document.getElementById(elementId)!;
    }

    const handleScroll = () => {
        const element = getElement();

        setScrollPosition({
            x: element.scrollLeft,
            y: element.scrollTop,
        });
    };

    useEffect(() => {
        getElement().addEventListener("scroll", handleScroll);

        return () => {
            getElement().removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScroll;