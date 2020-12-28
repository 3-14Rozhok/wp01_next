const RightNavbar = () => {
    return (
        <div className="relative flex flex-row text-lg text-blue-600">
            <button
                className="w-28 h-10 mx-3 self-center font-bold border border-blue-600 border-opacity-50 rounded-md"
                type="button"
            >
                Sign in
            </button>
            <button className="w-32 h-10 mx-3 self-center font-bold shadow-lg rounded-md" type="button">
                My cart
            </button>
            <div className="absolute right-12 top-0 h-5 w-5 bg-red-500 rounded-2xl text-white font-normal text-md text-center leading-5">
                5
            </div>
            <img src="/userpic.jpg" className="w-10 h-10 self-center" />
        </div>
    )
}

export default RightNavbar
