const ProductGroup = props => {
    const { src, text, color } = props
    return (
        <button type="button" className="h-14 flex flex-col items-center justify-end text-md">
            <img src={src} alt="category" className="w-5 h-5" />
            <p className={color}>{text}</p>
        </button>
    )
}

export default ProductGroup