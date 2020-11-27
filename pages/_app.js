import Head from 'next/head'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
    return (
        <body>
            <Head>
                <title>next</title>
            </Head>
            <Component {...pageProps} />
        </body>
    )
}

export default MyApp
