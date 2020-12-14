const ky = require('ky/umd')

import DefaultLayout from '../layouts/DefaultLayout'
import ProductGroups from '../components/ProductGroups'
import Filters from '../components/Filters'
import Main from '../components/Main'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

const HomePage = props => {
    const { list } = props
    return (
        <DefaultLayout title="Home">
            <ProductGroups />
            <div className="flex justify-center">
                <Filters />
                <Main list={list} />
            </div>
        </DefaultLayout>
    )
}

export async function getStaticProps(context) {
    const getName = async (i) => {
        const url = 'https://swapi.dev/api/people/' + i + '/'
        const parsed = await ky.get(url).json()
        const card = {}
        card.name = parsed.name
        card.gender = parsed.gender
        card.homeworld = parsed.homeworld
        return card
    }

    const arr = []
    for (var i = 1; i < 9; i++) {
        const card = await getName(i)
        arr.push(card)
    }

    return {
        props: {
            list: arr,
        },
    }
}

export default HomePage
