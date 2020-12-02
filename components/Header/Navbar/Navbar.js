import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="h-20 flex flex-row justify-between">
            <div className="flex flex-row text-lg">
                <div className="flex flex-row text-3xl">
                    <div className="flex justify-center h-10 w-10 m-1 bg-gradient-to-r from-blue-500 to-purple-600 self-center rounded-md">
                        <p className="text-white self-center">S</p>
                    </div>
                    <p className="self-center m-2">Shopka</p>
                </div>
                <button className="w-max h-10 mx-2 px-2 self-center opacity-60" type="button">
                    Sell on Shopka
                </button>
                <button className="h-10 mx-2 px-2 self-center opacity-60" type="button">
                    Register
                </button>
            </div>
            <div className="flex flex-row flex-grow w-full justify-center text-lg">
                {/* пока не понимаю, как правильно тут поместить лого поиска */}
                {/* <img src="/search_vector1.png" className="w-5 h-5 self-center" /> */}
                <input
                    className="h-12 self-center flex-grow w-full pl-2 ml-8 bg-gray-200 border rounded-3xl"
                    placeholder="search items"
                />

                <button className="h-10 self-center min-w-max m-2 text-md w-54 text-blue-600" type="button">
                    Consumer Electronics
                </button>
            </div>
            <div className="flex flex-row w-1/4 text-lg text-blue-600">
                <button
                    className="w-28 h-10 min-w-max mx-3 px-3 self-center font-bold border border-blue-600 border-opacity-50 rounded-md"
                    type="button"
                >
                    Sign in
                </button>
                <button
                    className="w-32 h-10 min-w-max mx-3 pl-5 pt-1.5  self-center flex font-bold shadow-lg rounded-md"
                    type="button"
                >
                    <div>My cart</div>
                    <div className="h-5 w-5 bg-red-500 rounded-2xl text-white font-normal text-sm">5</div>
                </button>
                <img src="/userpic.jpg" className="w-10 h-10 self-center" />
            </div>
        </div>
    )
}

export default Navbar
