'use client';

import { PropsWithChildren } from "react";
import { Scrollable, useScroll } from "./scrollable";

const mainScrollableId = "mainScrollable";

export const useMainScroll = () => useScroll(mainScrollableId);

export function MainScrollable({ children }: PropsWithChildren) {
    return (
        <Scrollable id={mainScrollableId}>
            {children}
        </Scrollable>
    )
}