import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import '../styles/tailwind.css'

import store from '../store'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
