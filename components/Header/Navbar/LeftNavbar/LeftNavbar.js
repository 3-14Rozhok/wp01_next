import Link from 'next/link'

const LeftNavbar = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row">
                <div className="flex flex-row text-3xl">
                    <div className="flex justify-center h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 self-center rounded-md">
                        <p className="text-white self-center font-bold">S</p>
                    </div>
                    <p className="self-center mx-3 font-medium">Shopka</p>
                </div>
                <Link href="/">
                    <a className="w-max mx-4 self-center opacity-60 cursor-pointer text-lg">Sell on Shopka</a>
                </Link>
                <Link href="/">
                    <a className="w-max mx-4 self-center opacity-60 cursor-pointer text-lg">Register</a>
                </Link>
            </div>
        </div>
    )
}

export default LeftNavbar
