import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import SortPanel from './SortPanel'
import ButtonPanel from './ButtonPanel'
import Related from './Related'
import PeopleList from './PeopleList'

const MainBlock = props => {
    const { people, getPeople } = props

    const { theme, setTheme } = useTheme()

    useEffect(async () => {
        await getPeople()
    }, [])

    return (
        <div className="flex flex-col items-center shadow-lg border rounded-lg">
            {/* <div className="flex justify-between w-full">
                <SortPanel />
                <ButtonPanel />
            </div>
            <Related /> */}

            <Button type="primary" onClick={() => setTheme('dark')}>
                Dark
            </Button>
            <Button type="primary" onClick={() => setTheme('light')}>
                Light
            </Button>

            <Input placeholder="input search text" addonAfter={<SearchOutlined />} />

            {/* <PeopleList people={people.data} /> */}
        </div>
    )
}

export default MainBlock
