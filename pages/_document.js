import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

function Document(props) {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;800&display=swap' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;