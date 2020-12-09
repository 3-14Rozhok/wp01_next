import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import ItemList from './ItemList'

const Main = () => {
    return (
        <>
            <div className="flex flex-col shadow-lg border rounded-lg">
                <div className="flex justify-between">
                    <SortPanel />
                    <ButtonPanel />
                </div>
                <Related />
                <ItemList />
            </div>
        </>
    )
}

export default Main
