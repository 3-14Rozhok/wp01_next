import Category from './Category'

const ItemCategories = () => {
    return (
        <div className="h-16 w-max m-4 flex flex-row text-gray-500 mx-auto">
            <Category src="/category1.svg" text="Clothing & Shoes" color="text-blue-600" />
            <Category src="/category2.svg" text="Entertainment" />
            <Category src="/category3.svg" text="Music" />
            <Category src="/category4.svg" text="Sports & Lifestyle" />
            <Category src="/category5.svg" text="Pets" />
            <Category src="/category6.svg" text="Kitchen Accessories" />
            <Category src="/category7.svg" text="Travel Equipment" />
            <Category src="/category8.svg" text="Growing & Garden" />
            <Category src="/category9.svg" text="Electrical Tools" />
            <Category src="/category10.svg" text="Mother Care" />
            <Category src="/category11.svg" text="Toys" />
            <Category src="/category12.svg" text="Vintage" />
        </div>
    )
}

export default ItemCategories
