import { Card } from 'antd'

// import Person from './Person'

const PeopleList = props => {
    const { people } = props

    return (
        <div className="flex flex-wrap dark:bg-gray-800" style={{ width: '1088px' }}>
            {people.map((person, index) => {
                return (
                    <Card key={index} title={person.name} className="w-64 m-2 bg-blue-50 dark:bg-gray-700">
                        <div className="text-sm text-black text-opacity-40">Gender: {person.gender}</div>
                        <div className="text-sm text-black text-opacity-40">Homeworld: {person.homeworld}</div>
                    </Card>
                )
            })}
        </div>
    )
}

export default PeopleList
