import Departaments from './Departaments'
import FilterSorting from './FilterSorting'
import FilterYear from './FilterYear'

const Filters = () => {
    return (
        <div className="flex flex-col">
            <Departaments />
            <FilterSorting />
            <FilterYear />
        </div>
    )
}

export default Filters
