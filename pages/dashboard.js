import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Layout />
      <h2>Dashboard page</h2>
      <div className={styles.card}>
        <Link href="/">
          Link to Home
        </Link>
      </div>
    </div>
  )
}