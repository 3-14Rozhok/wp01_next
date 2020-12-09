import DefaultLayout from '../layouts/DefaultLayout'
import ItemCategories from '../components/ItemCategories'
import Filters from '../components/Filters'
import Main from '../components/Main'

const HomePage = () => {
    return (
        <DefaultLayout title='Home'>
            <ItemCategories />
            <div className="flex justify-center">
                <Filters />
                <Main />
            </div>
        </DefaultLayout>
    )
}

export default HomePage
