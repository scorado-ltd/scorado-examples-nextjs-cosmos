'use client'

import { useSelect, useValue } from "react-cosmos/client";
import Modal from "~webapp/feature/framework/modal";
import { BackgroundVideo } from "~webapp/feature/testing/background";

export function ModalFixture() {
    const [header] = useValue("Header", { defaultValue: "Header" })
    const [content] = useValue("Content", { defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })
    const [background] = useSelect("Background", {
        options: ["Default", "Video"],
        defaultValue: "Default"
    })

    return (
        <div>
            <h1>Modal Styles</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Modal
                header={header}
                background={background === "Video" ? <BackgroundVideo /> : null}
            >
                <p>{content}</p>
            </Modal>
        </div>
    )
}