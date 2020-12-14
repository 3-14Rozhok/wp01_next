import Card from './Card'

const ProductList = props => {
    const { list } = props

    return (
        <div className="flex flex-wrap" style={{width: '1088px'}}>
            {list.map((card, id) => {
                return <div key={id}>
                    <Card card={card} />
                </div>
            })}
        </div>
    )
}

export default ProductList
