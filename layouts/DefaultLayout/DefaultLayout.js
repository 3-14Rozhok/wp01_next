import Head from 'next/head'
import Header from '../../components/Header'

const DefaultLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="h-screen 2xl:container 2xl:mx-auto">
                <Header />
                {children}
            </div>
        </>
    )
}

export default DefaultLayout
