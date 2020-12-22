import React, { useEffect } from 'react'

import { Button } from 'antd'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = props => {
    const { people, getPeople, theme, setTheme } = props

    // Записываю тему в store
    const clickHandler = async event => {
        if (theme.data == 'default') {
            setTheme('dark')
        } else {
            setTheme('default')
        }
        console.log('set theme:', theme.data)
    }

    useEffect(async () => {
        await getPeople()
    }, [])

    return (
        <div className="flex flex-col items-center shadow-lg border rounded-lg">
            <div className="flex justify-between w-full">
                <SortPanel />
                <ButtonPanel />
            </div>
            <Related />

            <Button type="primary" className="w-48 m-2 bg-yellow-700" onClick={event => clickHandler(event)}>
                Change theme
            </Button>

            <PeopleList people={people.data} />
        </div>
    )
}

export default MainBlock
