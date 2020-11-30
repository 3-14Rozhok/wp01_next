import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const DefaultLayout = ({ children, title = 'page' }) => {
    return (
        <div className="h-screen">
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
