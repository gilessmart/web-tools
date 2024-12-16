import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

const title = "Web Tools";
const description = "Browser based tools for developers";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p className="subtitle">{description}</p>
      </header>

      <main>
        <nav className={styles.mainNav}>
          <ul>
            <li><Link href="/base64-encoder/">Base64 Encoder</Link></li>
            <li><Link href="/string-escaper/">String Escaper</Link></li>
          </ul>
        </nav>

        <p>Code available on <Link href="https://github.com/gilessmart/web-tools">GitHub</Link></p>
      </main>
    </>
  );
}
