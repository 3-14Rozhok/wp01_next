const ButtonPanel = () => {
    return (
        <div className="relative flex items-center m-4 h-8">
            <button className="w-20 h-8 rounded-l-md focus:outline-none focus:bg-white bg-gray-200" type="button">
                Show all
            </button>
            <button className="w-20 h-8 focus:bg-white focus:outline-none bg-gray-200" type="button">
                Auction
            </button>
            <button className="w-20 h-8 mr-6 rounded-r-md focus:outline-none focus:bg-white bg-gray-200" type="button">
                Buy now
            </button>

            <button className="w-20 h-8 self-center rounded-l-md focus:outline-none focus:bg-white bg-gray-200" type="button">
                <img src="/sort1.svg" className="pl-8" />
            </button>
            <button className="w-20 h-8 self-center rounded-r-md focus:outline-none focus:bg-white bg-gray-200" type="button">
                <img src="/sort2.svg" className="pl-8" />
            </button>
        </div>
    )
}

export default ButtonPanel
