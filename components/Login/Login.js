import Link from 'next/link'
import Button from '../../shared/Button'
import s from './style.module.css'

const Login = () => {
  return (
    <div>
      <div className={s.name}>Login Page</div>
      <Button>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </Button>
    </div>
  )
}

export default Login