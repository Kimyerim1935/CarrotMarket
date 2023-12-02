
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
      Home
      </Link>
      <Link href="/about"  className={router.pathname === '/about' ? styles.active : ''}>
About
      </Link>
    </nav>
  )
}
