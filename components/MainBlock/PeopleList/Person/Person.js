const Person = props => {
    const { person } = props
    return (
        <div className="w-64 m-2 h-auto flex flex-col bg-gray-100 rounded-md">
            <img src="" alt={person.name} className="w-56 h-56 m-4" />
            <div className="mx-4 my-1 text-2xl font-bold">{person.name}</div>
            <div className="mx-4 text-sm text-black text-opacity-40">Gender: {person.gender}</div>
            <div className="mx-4 text-sm text-black text-opacity-40">Homeworld: {person.homeworld}</div>
            <button className="h-8 w-24 my-1 border border-blue-400 text-blue-600 rounded-md">More</button>
        </div>
    )
}

export default Person
