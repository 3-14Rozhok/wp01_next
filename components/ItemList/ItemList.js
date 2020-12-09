import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'

const ItemList = () => {
    return (
        <div className="flex justify-between shadow-lg border rounded-lg">
            <SortPanel />
            <ButtonPanel />
        </div>
    )
}

export default ItemList
