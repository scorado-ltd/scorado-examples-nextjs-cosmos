'use client';

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "~f/framework/icon";
import { SideMenuState, useSideMenuContext } from "~f/framework/navigation/sideMenu/context";
import { PopOutContent } from "~f/framework/navigation/sideMenu/item/item";
import { SideMenuItemPopOutContainer } from "~f/framework/navigation/sideMenu/item/itemPopOut";
import styles from "./searchItem.module.scss";

export default function SideMenuSearchItem() {
    const router = useRouter();
    const { isOpen, state, toggleMenu } = useSideMenuContext();
    const [shouldFocus, setShouldFocus] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const queryInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const queryInput = queryInputRef.current;
        if (queryInput === null || formRef.current === null) return;

        if (queryInput.value.length === 0 || !isOpen) {
            if (!isOpen) {
                toggleMenu();
                setShouldFocus(true);
            }
            else {
                queryInput.focus();
            }
        }
        else {
            const params = new URLSearchParams([[queryInput.name, queryInput.value]]);
            router.push(`${formRef.current.action}?${params}`);
        }
    }

    useEffect(() => {
        const queryInput = queryInputRef.current;
        if (queryInput && shouldFocus && state === SideMenuState.Open) {
            queryInput.focus();
            setShouldFocus(false);
        }
        else if (queryInput && (state === SideMenuState.Closing || state === SideMenuState.Closed)) {
            queryInput.value = '';
            setShouldFocus(false);
        }
    }, [state, shouldFocus]);

    return (
        <div className={styles.SearchItem}>
            <SideMenuItemPopOutContainer popoutContent={<PopOutContent>Search</PopOutContent>} offsetLeft={66}>
                <form action="/search" method="GET" className={styles.SearchItem__form} onSubmit={handleSubmit} ref={formRef}>
                    <div className={styles.SearchItem__box}>
                        <input className={styles.SearchItem__input} type="text" placeholder="Search" name="q" ref={queryInputRef} />
                        <button className={styles.SearchItem__button} type="submit">
                            <MagnifyingGlassIcon />
                        </button>
                    </div>
                </form>
            </SideMenuItemPopOutContainer>
        </div>
    )
}