import React from 'react';
import Document, {Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <title>OverJob</title>
                    
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="description" content="Plataforma de Vagas para Dev" />

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                    <link href={"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap"} rel="stylesheet"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;