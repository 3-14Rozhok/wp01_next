import Head from 'next/head'
import Header from '../../components/Header'

const DefaultLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="h-full w-full">
                <Header />
                {children}
            </div>
        </>
    )
}

export default DefaultLayout
