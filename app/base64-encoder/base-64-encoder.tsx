"use client";

import styles from "./base-64-encoder.module.css";
import { useState } from "react";
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

export default function Base64Encoder() {
    const [text, setText] = useState('');
    const [textIsBase64, setTextIsBase64] = useState(false);

    function onTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newText = event.target.value;
        setText(newText);
        const decodeResult = decode(newText);
        setTextIsBase64(decodeResult !== null);
    }

    function onEncodeClick() {
        const base64 = encode(text);
        setText(base64);
        setTextIsBase64(true);
    }

    function encode(plainText: string) {
        const uft8Words = Utf8.parse(plainText);
        return Base64.stringify(uft8Words);
    }

    function onDecodeClick() {
        const plainText = decode(text);
        setText(plainText!);
        const decodeAgainResult = decode(plainText!);
        setTextIsBase64(decodeAgainResult !== null);
    }

    function decode(base64: string) {
        try {
            const uft8Words = Base64.parse(base64);
            const plainText = Utf8.stringify(uft8Words);
            return (plainText.length === 0) ? null : plainText;
        }
        catch {
            return null;
        }
    }

    return (
        <div>
            <textarea className={styles.textEditor}
                placeholder="Text to convert"
                value={text}
                onChange={onTextChange} />

            <div className={styles.controls}>
                <button disabled={text.length === 0} onClick={onEncodeClick}>Encode</button>
                <button disabled={text.length === 0 || !textIsBase64} onClick={onDecodeClick}>Decode</button>
            </div>
        </div>
    );
};