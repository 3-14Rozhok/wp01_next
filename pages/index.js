import DefaultLayout from '../layouts/DefaultLayout'
import ItemCategories from '../components/ItemCategories'
import Filters from '../components/Filters'
import ItemList from '../components/ItemList'

const HomePage = () => {
    return (
        <DefaultLayout title='Home'>
            <ItemCategories />
            <div className="flex">
                <Filters />
                <ItemList />
            </div>
        </DefaultLayout>
    )
}

export default HomePage
