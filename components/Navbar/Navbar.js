import Button from '../../shared/Button'

const Navbar = () => {
    return (
        <header>
            <Button type="button" href="/" text="Home" />
            <Button type="button" href="/dashboard" text="Dashboard" />
            <Button type="button" href="/login" text="Log In" />
        </header>
    )
}

export default Navbar
