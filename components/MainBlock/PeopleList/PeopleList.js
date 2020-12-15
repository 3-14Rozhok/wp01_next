import Person from './Person'

const PeopleList = props => {
    const { people } = props

    return (
        <div className="flex flex-wrap" style={{width: '1088px'}}>
            {people.map((person, index) => {
                return <div key={index}>
                    <Person person={person} />
                </div>
            })}
        </div>
    )
}

export default PeopleList
