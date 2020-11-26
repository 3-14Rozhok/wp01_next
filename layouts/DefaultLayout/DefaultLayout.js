import Button from '../../shared/Button'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Button type="button" href="/dashboard" text="Dashboard" />
            <Button type="button" href="/login" text="Log In" />
            {children}
        </div>
    )
}

export default DefaultLayout
