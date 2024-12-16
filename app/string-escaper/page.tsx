import type { Metadata } from "next";
import StringEscaper from "./string-escaper";

const title = "String Escaper";
const description = "Escapes / unescapes text for C-style double-quote delimited string literals";

export const metadata: Metadata = {
    title: title,
    description: description,
};

export default function Page() {
    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                <p className="subtitle">{description}</p>
            </header>

            <main>
                <StringEscaper></StringEscaper>
            </main>
        </>
    );
};