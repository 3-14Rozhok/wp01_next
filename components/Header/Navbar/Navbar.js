import NavButton from './NavButton'

const Navbar = () => {
    return (
        <div className="relative top-16 left-6 flex flex-row">
            <NavButton type="button" href="/" text="Home" />
            <NavButton type="button" href="/post" text="Post" />
            <NavButton type="button" href="/login" text="Log In" />
        </div>
    )
}

export default Navbar
