import ProductCard from './ProductCard'

const ItemList = () => {
    return (
        <div className="flex mx-4">
            <ProductCard
                src="/item1.png"
                price="$49.50"
                rating="5"
                text1="Vintage Typewriter to post awesome stories about UI design and webdev."
                text2="Eligible for Shipping To Mars or somewhere else"
            />
        </div>
    )
}

export default ItemList
