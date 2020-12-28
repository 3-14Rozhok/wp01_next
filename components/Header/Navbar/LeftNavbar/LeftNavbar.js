import Link from 'next/link'

const LeftNavbar = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center text-3xl">
                    <div className="flex justify-center h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 self-center rounded-md">
                        <p className="text-white font-bold">S</p>
                    </div>
                    <p className="flex mx-3 font-medium">Shopka</p>
                </div>
                <Link href="/">
                    <a className="w-max mx-4 opacity-60 cursor-pointer text-lg">Sell on Shopka</a>
                </Link>
                <Link href="/">
                    <a className="w-max mx-4 opacity-60 cursor-pointer text-lg">Register</a>
                </Link>
            </div>
        </div>
    )
}

export default LeftNavbar
