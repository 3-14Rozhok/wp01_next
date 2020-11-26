import Link from 'next/link'
import Button from '../../shared/Button'
import s from './style.module.css'

const Dashboard = () => {
  return (
    <div>
      <div className={s.name}>Dashboard Page</div>
      <Button>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </Button>
    </div>
  )
}

export default Dashboard