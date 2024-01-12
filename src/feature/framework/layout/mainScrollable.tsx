'use client';

import { PropsWithChildren } from "react";
import { Scrollable, useScrollable } from "./scrollable";

const mainScrollableId = "mainScrollable";

export const useMainScrollable = () => useScrollable(mainScrollableId);

export function MainScrollable({ children }: PropsWithChildren) {
    return (
        <Scrollable id={mainScrollableId}>
            {children}
        </Scrollable>
    )
}