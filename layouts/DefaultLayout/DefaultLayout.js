import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const DefaultLayout = ({ children, title }) => {
    return (
        <div className="h-screen 2xl:container 2xl:mx-auto">
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
