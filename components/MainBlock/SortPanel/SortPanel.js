import Dropdown from '../../../shared/Dropdown'

const SortPanel = () => {
    return (
        <div className="relative flex items-center m-4 h-8">
            <Dropdown
                buttonName="Sort by"
                buttonStyle="relative w-28 h-8 mr-2 flex items-center border rounded-md"
                buttonTextStyle="pl-2 text-md"
                containerStyle="absolute left-4 top-10 p-2 flex flex-col items-start bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <button className="h-6 text-md font-normal">price</button>
                <button className="h-6 text-md font-normal">recent</button>
                <button className="h-6 text-md font-normal">other</button>
            </Dropdown>

            <Dropdown
                buttonName="Condition"
                buttonStyle="relative w-32 h-8 mr-2 flex items-center border rounded-md"
                buttonTextStyle="pl-2 text-md"
                containerStyle="absolute left-36 top-10 p-2 flex flex-col items-start bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <button className="h-6 text-md font-normal">perfect</button>
                <button className="h-6 text-md font-normal">good</button>
                <button className="h-6 text-md font-normal">bad</button>
            </Dropdown>

            <Dropdown
                buttonName="Delivery options"
                buttonStyle="relative w-max h-8 flex items-center border rounded-md"
                buttonTextStyle="pl-2 pr-10 text-md"
                containerStyle="absolute left-64 top-10 p-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <button className="h-6 text-md font-normal">worldwide shipping</button>
            </Dropdown>
        </div>
    )
}

export default SortPanel
