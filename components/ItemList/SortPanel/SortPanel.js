import Dropdown from '../../Dropdown'

const SortPanel = () => {
    return (
        <div className="relative flex m-4 h-8">
            <Dropdown
                buttonName="Sort by"
                buttonStyle="relative w-28 h-8 mr-2 flex self-center border rounded-md"
                buttonTextStyle="pl-2 self-center text-md"
                containerStyle="absolute left-4 top-10 p-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <Dropdown
                    buttonName="price"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
                <Dropdown
                    buttonName="recent"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
                <Dropdown
                    buttonName="other"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
            </Dropdown>

            <Dropdown
                buttonName="Condition"
                buttonStyle="relative w-32 h-8 mr-2 flex self-center border rounded-md"
                buttonTextStyle="pl-2 self-center text-md"
                containerStyle="absolute left-36 top-10 p-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <Dropdown
                    buttonName="perfect"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
                <Dropdown
                    buttonName="good"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
                <Dropdown
                    buttonName="bad"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
            </Dropdown>

            <Dropdown
                buttonName="Delivery options"
                buttonStyle="relative w-max h-8 flex self-center border rounded-md"
                buttonTextStyle="pl-2 pr-10 self-center text-md"
                containerStyle="absolute left-64 top-10 p-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-3"
            >
                <Dropdown
                    buttonName="worldwide shipping"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                ></Dropdown>
            </Dropdown>
        </div>
    )
}

export default SortPanel