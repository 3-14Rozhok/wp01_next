const Card = props => {
    const { card } = props
    return (
        <div className="w-64 m-2 h-auto flex flex-col bg-gray-100 rounded-md">
            <img src={card.src} alt={card.name} className="w-56 h-56 m-4" />
            <div className="mx-4 my-1 text-2xl font-bold">{card.name}</div>
            <div className="mx-4 text-sm text-black text-opacity-40">Gender: {card.gender}</div>
            <div className="mx-4 text-sm text-black text-opacity-40">Homeworld: {card.homeworld}</div>
            <button className="h-8 w-24 my-1 border border-blue-400 text-blue-600 rounded-md">More</button>
        </div>
    )
}

export default Card
