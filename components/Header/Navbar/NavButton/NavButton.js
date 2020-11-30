import Router from 'next/router'

const NavButton = (props) => {
    const { type, href, text } = props // Деструктуризую обьект, присваивая его значения новым переменным
    return (
        <button
            className="m-2 w-24 h-10 bg-blue-300 rounded-lg text-lg"
            type={type} // submit добавляет возможность использовать дополнительные аттрибуты для работы с формой, reset сбрасывает все input'ы
            onClick={() => {
                Router.push(href) // replace (затереть историю)
            }}
        >
            {text}
        </button>
    )
}

export default NavButton
