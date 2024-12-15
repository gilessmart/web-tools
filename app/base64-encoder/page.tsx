import type { Metadata } from "next";
import Base64Encoder from "./base-64-encoder";

const title = "Base64 Encoder / Decoder";
const description = "Converts text to / from base64";

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
                <Base64Encoder></Base64Encoder>
            </main>
        </>
    );
};