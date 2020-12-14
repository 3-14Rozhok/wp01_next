import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import ProductList from './ProductList'

const Main = props => {
    const { list } = props

    return (
        <>
            <div className="flex flex-col shadow-lg border rounded-lg">
                <div className="flex justify-between">
                    <SortPanel />
                    <ButtonPanel />
                </div>
                <Related />
                <ProductList list={list} />
            </div>
        </>
    )
}

export default Main
