import NavButton from './NavButton'

const Navbar = () => {
    return (
        <div className="absolute top-16 left-8 space-x-8 flex flex-row justify-start">
            <NavButton type="button" href="/" text="Home" />
            <NavButton type="button" href="/post" text="Post" />
            <NavButton type="button" href="/login" text="Log In" />
        </div>
    )
}

export default Navbar
