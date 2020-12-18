import React, { useEffect, useState } from 'react'

import api from '../../api'
import store from '../../store'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = () => {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        try {
            //запрос данных
            const data = await api.get('people/?page=2').json()
            // запись данных в store
            store.dispatch.people.setPeople(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(async () => {
        await getPeople()
        // чтение данных из store
        setPeople(store.getState().people.data)
    }, [])

    return (
        <>
            <div className="flex flex-col shadow-lg border rounded-lg">
                <div className="flex justify-between">
                    <SortPanel />
                    <ButtonPanel />
                </div>
                <Related />
                <PeopleList people={people} />
            </div>
        </>
    )
}

export default MainBlock
