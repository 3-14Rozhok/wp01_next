import Dropdown from '../../../shared/Dropdown'

const Filter1 = () => {
    return (
        <>
            <Dropdown
                buttonName="Sorting"
                buttonStyle="relative w-72 h-10 m-2 flex self-center shadow-lg rounded-md"
                buttonTextStyle="ml-2 self-center text-lg"
                containerStyle="m-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-4"
            >
                <Dropdown
                    buttonName="Recommended"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="self-center px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="Recently Added"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="self-center px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="Expiring soon"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="self-center px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="Most Rated"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="self-center px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="Price: Low"
                    buttonStyle="flex self-center h-10"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="self-center px-3"
                ></Dropdown>
            </Dropdown>
        </>
    )
}

export default Filter1
