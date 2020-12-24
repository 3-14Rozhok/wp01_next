import Link from 'next/link'
import { Input } from 'antd'

const LeftNavbar = () => {
    return (
        <div className="w-full px-8 mr-12 flex flex-row flex-grow justify-center items-center text-lg">
            <div className="relative flex-grow w-full">
                <img src="/search1.svg" className="absolute left-4 w-4 h-4 top-4" />
                <img src="/search2.svg" className="absolute right-4 w-4 h-4 top-4" />
                <Input placeholder="search items" />
            </div>
            <Link href="/">
                <a className="min-w-max ml-4 text-blue-600 text-lg cursor-pointer ">Consumer Electronics</a>
            </Link>
        </div>
    )
}

export default LeftNavbar
