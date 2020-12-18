import React, { useEffect, useState } from 'react'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = props => {
    const { people, getPeople } = props

    useEffect(async () => {
        await getPeople()
    }, [])

    return (
        <>
            <div className="flex flex-col shadow-lg border rounded-lg">
                <div className="flex justify-between">
                    <SortPanel />
                    <ButtonPanel />
                </div>
                <Related />
                <PeopleList people={people.data} />
            </div>
        </>
    )
}

export default MainBlock
