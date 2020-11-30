import Navbar from './Navbar'
import Search from './Search'
import Logo from './Logo'

const Header = () => {
    return (
        <header className="sticky top-0 h-32 border-b-2 2xl:border-2 2xl:rounded-xl flex flex-row justify-between text-gray-700">
            <Navbar />
            <Search />
            <Logo />
        </header>
    )
}

export default Header
