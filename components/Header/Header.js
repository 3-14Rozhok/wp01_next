import Navbar from './Navbar'
import Search from './Search'
import Logo from './Logo'

const Header = () => {
    return (
        <header className="h-32 border-b-4">
            <Navbar />
            <Search />
            <Logo />
        </header>
    )
}

export default Header
