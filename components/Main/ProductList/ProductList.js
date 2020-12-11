import ProductCard from './ProductCard'

const ProductList = data => {
    return (
        <div className="flex flex-wrap" style={{width: '1088px'}}>
            {data.products.map((product) => {
                return <div>
                    <ProductCard data={product} />
                </div>
            })}
        </div>
    )
}

export default ProductList
