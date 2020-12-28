import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar/RightNavbar'
import Search from './Search'

const Navbar = () => {
    return (
        <div className="h-12 flex flex-row">
            <LeftNavbar />
            <Search />
            <RightNavbar />
        </div>
    )
}

export default Navbar
