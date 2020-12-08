const Category = props => {
    const { src, text, color } = props
    return (
        <button type="button" className="min-w-max h-14 flex flex-col self-center justify-end mx-4 text-md">
            <img src={src} alt="category" className="w-5 h-5 self-center" />
            <p className={color}>{text}</p>
        </button>
    )
}

export default Category
