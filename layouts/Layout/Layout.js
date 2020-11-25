import Link from 'next/link'
import Button from '../../shared/Button'
import s from './style.module.css'

const Layout = ( {children} ) => {
  return (
    <div className={s.container}>
      <Button>
        <Link href="/login">
          Log In
        </Link>
      </Button>
      <Button>
        <Link href="/dashboard">
          Dashboard
        </Link>
      </Button>
      {children}
    </div>
  )
}

export default Layout