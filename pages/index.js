import DefaultLayout from '../layouts/DefaultLayout'
import ProductGroups from '../components/ProductGroups'
import Filters from '../components/Filters'
import MainBlock from '../components/MainBlock'

import { Provider } from 'react-redux'
import store from '../store'

const HomePage = props => {
    return (
        <Provider store={store}>
            <DefaultLayout title="Home">
                <ProductGroups />
                <div className="flex justify-center">
                    <Filters />
                    <MainBlock />
                </div>
            </DefaultLayout>
        </Provider>
    )
}

export default HomePage
