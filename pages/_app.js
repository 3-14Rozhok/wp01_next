import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

import '../styles/tailwind.css'

import store from '../store'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

export default MyApp
