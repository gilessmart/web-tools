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
        setTextIsBase64(isBase64(newText));
    }

    function onEncodeClick() {
        setText(encode(text));
        setTextIsBase64(true);
    }

    function onDecodeClick() {
        const decodedText = decode(text);
        setText(decodedText);
        setTextIsBase64(isBase64(decodedText));
    }

    function encode(plainText: string) {
        const uft8Words = Utf8.parse(plainText);
        return Base64.stringify(uft8Words);
    }

    function decode(base64: string) {
        const uft8Words = Base64.parse(base64);
        return Utf8.stringify(uft8Words);
    }

    function isBase64(candidate: string) {
        // We round-trip the text to base64 and back, and check it still matches because CryptoJS 
        // is quite liberal in what it will decode, producing a decoded result for strings like 
        // "aa" and "YWE=!"£$%^*()" that I don't want to classify as base64.        
        try {
            const roundTripped = encode(decode(candidate));
            return roundTripped === candidate;
        }
        catch {
            return false;
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