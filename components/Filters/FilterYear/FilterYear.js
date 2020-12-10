import Dropdown from '../../../shared/Dropdown'

const FilterYear = () => {
    return (
        <>
            <Dropdown
                buttonName="Year of manufacturing"
                buttonStyle="relative w-72 h-10 m-2 flex items-center shadow-lg rounded-md"
                buttonTextStyle="ml-2 text-lg"
                containerStyle="m-2 bg-blue-50 rounded-md"
                src1="/filter3.svg"
                src2="/filter4.svg"
                imgStyle="absolute right-4 top-4"
            >
                <Dropdown
                    buttonName="1965"
                    buttonStyle="flex items-center h-10"
                    buttonTextStyle="text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="1966"
                    buttonStyle="flex items-center h-10"
                    buttonTextStyle="text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="1967"
                    buttonStyle="flex items-center h-10"
                    buttonTextStyle="text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="1968"
                    buttonStyle="flex items-center h-10"
                    buttonTextStyle="text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="px-3"
                ></Dropdown>
                <Dropdown
                    buttonName="1969"
                    buttonStyle="flex items-center h-10"
                    buttonTextStyle="text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter5.svg"
                    src2="/filter5.svg"
                    imgStyle="px-3"
                ></Dropdown>
            </Dropdown>
        </>
    )
}

export default FilterYear
