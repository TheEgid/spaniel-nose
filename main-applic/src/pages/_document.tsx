import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render() {
        return (
            <Html lang="ru">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
