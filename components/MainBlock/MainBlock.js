import React, { useState } from 'react'

import api from '../../api'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = () => {

    const [people, setPeople] = useState([])

    api('/people/?page=2').then(results => setPeople(results))

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
