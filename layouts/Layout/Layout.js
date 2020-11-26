import Link from 'next/link'
import Button from '../../shared/Button'
import s from './style.module.css'

const Layout = ( {children} ) => {
  return (
    <div className={s.container}>
      <Button>
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </Button>
      <Button>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </Button>
      {children}
    </div>
  )
}

export default Layout