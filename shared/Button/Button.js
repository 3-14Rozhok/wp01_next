import Router from 'next/router'

const Button = (props) => {
    const { href, text } = props // Деструктуризую обьект, присваивая его значения новым переменным
    return (
        <button
            type="button" // submit добавляет возможность использовать дополнительные аттрибуты для работы с формой, reset сбрасывает все input'ы
            onClick={() => {
                Router.replace(href) // В отличии от push не добавляет запись в историю браузера, а изменяет её. Пока не знаю, что лучше
            }}
        >
            {text}
        </button>
    )
}

export default Button
