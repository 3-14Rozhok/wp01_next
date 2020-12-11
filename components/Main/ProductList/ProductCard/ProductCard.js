const ProductCard = data => {
    return (
        <div className="w-64 m-2 h-auto flex flex-col bg-gray-100 rounded-md" >
            <img src={data.data.src} className="w-56 h-56 m-4"/>
            <div className="mx-4">{data.data.text1}</div>
            <div className="mx-4 my-1 text-2xl font-bold">{data.data.price}</div>
            <div className="mx-4 text-sm text-black text-opacity-40">{data.data.text2}</div>
            <div className="flex items-center justify-between">
                <div className="mx-4">{data.data.rating}</div>
                <button className="h-8 w-24 my-1 border border-blue-400 text-blue-600 rounded-md">Watch</button>
            </div>
        </div>
    )
}

export default ProductCard