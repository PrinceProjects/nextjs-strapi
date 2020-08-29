import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth'
import styles from './Header.module.css'

export default function Header () {

	return (
		<header>
			<nav>
		        <ul className={styles.navList}>
		          <li className={styles.navListItem}><Link href="/"><a>Home</a></Link></li>
		          <li className={styles.navListItem}><Link href="/client"><a>Client</a></Link></li>
		          <li className={styles.navListItem}><Link href="/server"><a>Server</a></Link></li>
		          <li className={styles.navListItem}><Link href="/protected"><a>Protected</a></Link></li>
		          <li className={styles.navListItem}><Link href="/api-example"><a>API</a></Link></li>
		        </ul>
      		</nav>
		</header>
	)
}