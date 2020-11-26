import Router from 'next/router'

const Button = (props) => {
    const { type, href, text } = props // Деструктуризую обьект, присваивая его значения новым переменным
    return (
        <button
            type={type} // submit добавляет возможность использовать дополнительные аттрибуты для работы с формой, reset сбрасывает все input'ы
            onClick={() => {
                Router.push(href) // replace (затереть историю)
            }}
        >
            {text}
        </button>
    )
}

export default Button
