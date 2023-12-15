'use client'

function clientPreRender() {
    console.log("Client Pre Render Function")
}

export const ClientPreRenderer = () => {
    const functionString = String(clientPreRender);
    let codeToRunOnClient = `(${functionString})()`;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};