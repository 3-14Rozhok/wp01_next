import Button from '../../shared/Button'

const Layout = ({ children }) => {
    return (
        <div>
            <Button href="/dashboard" text="Dashboard" />
            <Button href="/login" text="Log In" />
            {children}
        </div>
    )
}

export default Layout
