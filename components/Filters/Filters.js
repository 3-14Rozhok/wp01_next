import Departaments from './Departaments'
import Filter1 from './Filter1'
import Filter2 from './Filter2'

const Filters = () => {
    return (
        <div className="h-max w-max flex flex-col">
            <Departaments />
            <Filter1 />
            <Filter2 />
        </div>
    )
}

export default Filters
