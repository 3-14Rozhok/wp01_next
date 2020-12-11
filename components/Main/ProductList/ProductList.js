import ProductCard from './ProductCard'

const ProductList = products => {
    return (
        <div className="flex flex-wrap" style={{width: '1088px'}}>
            {products.products.map((product, id) => {
                return <div key={id}>
                    <ProductCard data={product} />
                </div>
            })}
        </div>
    )
}

export default ProductList
