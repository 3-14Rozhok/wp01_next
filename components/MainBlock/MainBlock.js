import React, { useState, useEffect } from 'react'

import api from '../../api'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'
import { post } from 'ky-universal'

const MainBlock = () => {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        try {
            const data = await api.get('/people/?page=2')
            setPeople(data)
        } catch (error) {
            console.log(error)
        }
    }
    // post example
    const post = async () => {
        const json = {
            1: 123,
        }

        try {
            const data = await api.post('https://money-96ae0.firebaseio.com/1.json', json)
            console.log('post: ', data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(async () => {
        getPeople()
        post()
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
