"use client";

import styles from "./string-escaper.module.css";
import { useState } from "react";

export default function StringEscaper() {
    const [text, setText] = useState('');

    function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
    }

    function onEscapeClick() {
        let escapedText = text;
        escapedText = replaceAll(escapedText, '\\', '\\\\');
        escapedText = replaceAll(escapedText, '"', '\\"');
        setText(escapedText);
    }

    function onUnescapeClick() {
        let unescapedText = text;
        unescapedText = replaceAll(unescapedText, '\\"', '"');
        unescapedText = replaceAll(unescapedText, '\\\\', '\\');
        setText(unescapedText);
    }

    function replaceAll(inputText: string, searchValue: string, replaceValue: string) {
        return inputText.split(searchValue).join(replaceValue);
    }

    return (
        <div>
            <textarea className={styles.textEditor}
                placeholder="Text to convert"
                value={text}
                onChange={onTextChange} />

            <div className={styles.controls}>
                <button disabled={text.length === 0} onClick={onEscapeClick}>Escape</button>
                <button disabled={text.length === 0} onClick={onUnescapeClick}>Unescape</button>
            </div>
        </div>
    );
};