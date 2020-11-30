import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} className="box-border font-san" /> //Здесь можно стили указывать?
}

export default MyApp
