import DefaultLayout from '../layouts/DefaultLayout'
import ProductGroups from '../components/ProductGroups'
import Filters from '../components/Filters'
import MainBlock from '../components/MainBlock'

const HomePage = props => {
    return (
        <DefaultLayout title="Home">
            <ProductGroups />
            <div className="flex justify-center">
                <Filters />
                <MainBlock />
            </div>
        </DefaultLayout>
    )
}

export default HomePage
