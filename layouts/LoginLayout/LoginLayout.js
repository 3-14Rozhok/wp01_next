import Head from 'next/head'
import Header from '../../components/Header'

const LoginLayout = ({ children, title = 'Title' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default LoginLayout
