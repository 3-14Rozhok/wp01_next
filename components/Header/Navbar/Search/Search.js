import Link from 'next/link'

const LeftNavbar = () => {
    return (
        <div className="flex flex-row w-full px-8 flex-grow justify-center text-lg">
            <div className="relative self-center flex-grow w-full mx-4">
                <img src="/svg_search1.svg" className="absolute left-4 w-4 h-4 top-4" />
                <img src="/svg_search2.svg" className="absolute right-4 w-4 h-4 top-4" />
                <input
                    className="h-12 flex-grow w-full px-12 bg-gray-200 border rounded-3xl"
                    placeholder="search items"
                />
            </div>
            <Link href="/">
                <a className="min-w-max mx-2 self-center text-blue-600 text-lg cursor-pointer ">Consumer Electronics</a>
            </Link>
        </div>
    )
}

export default LeftNavbar
