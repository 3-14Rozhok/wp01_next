const ButtonPanel = () => {
    return (
        <div className="relative flex m-4 h-8 group">
            <button className="w-20 h-8 self-center rounded-md group-focus:bg-white bg-gray-200" type="button">
                Show all
            </button>
            <button className="w-20 h-8 self-center rounded-md group-focus:bg-white bg-gray-200" type="button">
                Auction
            </button>
            <button className="w-20 h-8 mr-6 self-center rounded-md group-focus:bg-white bg-gray-200" type="button">
                Buy now
            </button>

            <button className="w-20 h-8 self-center rounded-md group-focus:bg-white bg-gray-200" type="button">
                <img src="/sort1.svg" className="pl-8" />
            </button>
            <button className="w-20 h-8 self-center rounded-md bg-gray-200 group-focus:bg-white" type="button">
                <img src="/sort2.svg" className="pl-8" />
            </button>
        </div>
    )
}

export default ButtonPanel
