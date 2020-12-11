import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import ProductList from './ProductList'

const Main = () => {
    const data = {
        products: [
            {
                src: '/item1.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item2.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item3.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item4.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item4.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item1.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item1.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
            {
                src: '/item1.png',
                price: '$49.50',
                rating: '5',
                text1: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                text2: 'Eligible for Shipping To Mars or somewhere else',
            },
        ],
    }
    return (
        <>
            <div className="flex flex-col shadow-lg border rounded-lg">
                <div className="flex justify-between">
                    <SortPanel />
                    <ButtonPanel />
                </div>
                <Related />
                <ProductList products={data.products} />
            </div>
        </>
    )
}

export default Main
