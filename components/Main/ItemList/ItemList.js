import Item from './Item'

const ItemList = () => {
    return (
        <div className="flex mx-4">
            <Item
                src="/item1.png"
                price="$49.50"
                rating="5"
                text1="Vintage Typewriter to post awesome stories about UI design and webdev."
                text2="Eligible for Shipping To Mars or somewhere else"
            />
            <Item
                src="/item2.png"
                price="$13.95"
                rating="4"
                text1="Lee Pucker design. Leather botinki for handsome designers. Free shipping."
                text2="1258 bids, 359 watchers $5.95 for shipping"
            />
            <Item
                src="/item3.png"
                price="$128.99"
                rating="5"
                text1="Timesaving kitten to save months on development. Playful, cute, cheap!"
                text2="Eligible for nothing :("
            />
            <Item
                src="/item4.png"
                price="$12.48"
                rating="2"
                text1="Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!"
                text2="Wordwide shitting available Buyers protection possible!"
            />
        </div>
    )
}

export default ItemList
