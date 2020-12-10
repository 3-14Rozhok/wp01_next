import DefaultLayout from '../layouts/DefaultLayout'
import ProductGroups from '../components/ProductGroups'
import Filters from '../components/Filters'
import Main from '../components/Main'

const HomePage = () => {
    return (
        <DefaultLayout title='Home'>
            <ProductGroups />
            <div className="flex justify-center">
                <Filters />
                <Main />
            </div>
        </DefaultLayout>
    )
}

export default HomePage
