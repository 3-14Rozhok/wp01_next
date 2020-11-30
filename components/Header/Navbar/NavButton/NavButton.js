import Router from 'next/router'

const NavButton = (props) => {
    const { type, href, text } = props
    return (
        <button
            className="m-2 w-24 h-10 bg-blue-300 rounded-lg text-lg shadow-md"
            type={type}
            onClick={() => {
                Router.push(href) // replace (затереть историю)
            }}
        >
            {text}
        </button>
    )
}

export default NavButton
