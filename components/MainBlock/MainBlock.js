import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from 'antd'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = props => {
    const { people, getPeople } = props
    const { theme, setTheme } = useTheme()

    const toggleTheme = async event => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    // const toggleTheme = async event => {
    //     if (localStorage.theme === 'light') {
    //         localStorage.theme = 'dark'
    //         setTheme('dark')
    //     } else {
    //         localStorage.theme = 'light'
    //         setTheme('light')
    //     }
    // }

    // useEffect(async () => {
    //     if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
    //         document.querySelector('html').classList.add('dark')
    //         console.log('dark on')
    //     } else {
    //         document.querySelector('html').classList.remove('dark')
    //         console.log('dark off')
    //     }
    // }, [theme])

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

            <Button type="primary" onClick={event => toggleTheme(event)}>
                Change theme
            </Button>

            <PeopleList people={people.data} />
        </div>
    )
}

export default MainBlock
