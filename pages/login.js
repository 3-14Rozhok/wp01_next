import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <h2>Log In page</h2>
      <div className={styles.card}>
        <Link href="/">
          Link to Home
        </Link>
      </div>
    </div>
  )
}