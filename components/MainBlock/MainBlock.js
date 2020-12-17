import React, { useState, useEffect } from 'react'

import api from '../../api'
import store from '../../rematch/store'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = () => {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        try {
            const data = await api.get('people/?page=2').json()
            setPeople(data.results)

            store.dispatch.people.setPeople(data.results)
            console.log(store.getState())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(async () => {
        getPeople()
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
