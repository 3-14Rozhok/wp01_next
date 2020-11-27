import NavButton from '../../../shared/NavButton'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-start">
            <NavButton type="button" href="/" text="Home" />
            <NavButton type="button" href="/dashboard" text="Dashboard" />
            <NavButton type="button" href="/login" text="Log In" />
        </div>
    )
}

export default Navbar
