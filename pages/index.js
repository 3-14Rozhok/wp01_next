import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/login">
          Link to Log In
        </Link>
      </div>
      <div className={styles.card}>
        <Link href="/dashboard">
          Link to Dashboard
        </Link>
      </div>
    </div>
  )
}
