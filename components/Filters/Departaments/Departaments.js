import Dropdown from '../Dropdown/'

const Departaments = () => {
    return (
        <>
            <Dropdown
                buttonName="Departaments"
                buttonStyle="w-72 h-14 m-2 flex self-center justify-around border border-blue-600 border-opacity-50 rounded-md"
                buttonTextStyle="self-center text-blue-600 font-semibold text-2xl"
                containerStyle="ml-6"
                src1="/filter1.svg"
                src2="/filter1.svg"
                imgStyle="self-center"
            >
                <Dropdown
                    buttonName="All Categories"
                    buttonStyle="flex self-center h-10 mt-4"
                    buttonTextStyle="self-center text-md font-normal"
                    containerStyle="ml-2"
                    src1="/filter2.svg"
                    src2="/filter3.svg"
                    imgStyle="self-center px-3"
                >
                    <Dropdown
                        buttonName="Electronics"
                        buttonStyle="flex self-center h-10"
                        buttonTextStyle="self-center text-md font-normal"
                        containerStyle="ml-9 flex flex-col"
                        src1="/filter2.svg"
                        src2="/filter3.svg"
                        imgStyle="self-center px-3"
                    >
                        <div className="h-10">Cell Phone Accessories</div>
                        <div className="h-10">Cell Phone Gadgets</div>
                        <div className="h-10">Applications</div>
                        <div className="h-10">Smart Watches</div>
                    </Dropdown>
                    <Dropdown
                        buttonName="Buisness & Industrial"
                        buttonStyle="flex self-center h-10"
                        buttonTextStyle="self-center text-md font-normal"
                        containerStyle="ml-2"
                        src1="/filter2.svg"
                        src2="/filter3.svg"
                        imgStyle="self-center px-3"
                    ></Dropdown>
                    <Dropdown
                        buttonName="Computers"
                        buttonStyle="flex self-center h-10"
                        buttonTextStyle="self-center text-md font-normal"
                        containerStyle="ml-2"
                        src1="/filter2.svg"
                        src2="/filter3.svg"
                        imgStyle="self-center px-3"
                    ></Dropdown>
                    <Dropdown
                        buttonName="Consumer Electronics"
                        buttonStyle="flex self-center h-10"
                        buttonTextStyle="self-center text-md font-normal"
                        containerStyle="ml-2"
                        src1="/filter2.svg"
                        src2="/filter3.svg"
                        imgStyle="self-center px-3"
                    ></Dropdown>
                    <Dropdown
                        buttonName="Home & Garden"
                        buttonStyle="flex self-center h-10"
                        buttonTextStyle="self-center text-md font-normal"
                        containerStyle="ml-2"
                        src1="/filter2.svg"
                        src2="/filter3.svg"
                        imgStyle="self-center px-3"
                    ></Dropdown>
                </Dropdown>
            </Dropdown>
        </>
    )
}

export default Departaments
