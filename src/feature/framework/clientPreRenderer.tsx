'use client'

export function ClientPreRenderer({ f }: { f: () => void }) {
    const functionString = String(f);
    let codeToRunOnClient = `(${functionString})()`;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};