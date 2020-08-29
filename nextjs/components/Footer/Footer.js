import Link from 'next/link'
import styles from './Footer.module.css'
import { version } from '../../package.json'

export default function Footer () {
	return (
		<footer className={styles.footer}>
			<ul className={styles.navlist}>
				<li className={styles.navListItem}><a href="">Link1</a></li>
				<li className={styles.navListItem}><a href="">Link1</a></li>
				<li className={styles.navListItem}><Link href="/terms"><a>Terms</a></Link></li>
				<li className={styles.navListItem}><em>{version}</em></li>
			</ul>
		</footer>
	)
}