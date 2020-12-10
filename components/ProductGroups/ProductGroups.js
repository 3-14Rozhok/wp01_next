import ProductGroup from './ProductGroup'

const ProductGroups = () => {
    return (
        <div className="h-16 m-4 flex flex-row justify-center items-center text-gray-500 space-x-8">
            <ProductGroup src="/category1.svg" text="Clothing & Shoes" color="text-blue-600" />
            <ProductGroup src="/category2.svg" text="Entertainment" />
            <ProductGroup src="/category3.svg" text="Music" />
            <ProductGroup src="/category4.svg" text="Sports & Lifestyle" />
            <ProductGroup src="/category5.svg" text="Pets" />
            <ProductGroup src="/category6.svg" text="Kitchen Accessories" />
            <ProductGroup src="/category7.svg" text="Travel Equipment" />
            <ProductGroup src="/category8.svg" text="Growing & Garden" />
            <ProductGroup src="/category9.svg" text="Electrical Tools" />
            <ProductGroup src="/category10.svg" text="Mother Care" />
            <ProductGroup src="/category11.svg" text="Toys" />
            <ProductGroup src="/category12.svg" text="Vintage" />
        </div>
    )
}

export default ProductGroups
