const Item = props => {
    const { src, text1, text2, price, rating } = props
    return (
        <div className="w-64 m-2 h-auto flex-col bg-gray-100 rounded-md">
            <img src={src} className="w-56 h-56 m-4"/>
            <div>{text1}</div>
            <div>{price}</div>
            <div>{text2}</div>
            <div className="flex jsustify-between">
                <div className="self-center">{rating}</div>
                <button className="h-8 w-24 m-1 border border-blue-400 text-blue-600 rounded-md">Watch</button>
            </div>
        </div>
    )
}

export default Item
