import styles from './Toolbar.module.css';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton' 

const toolbar = (props) => {
	return (
		<header className={styles.toolbar}>
			<nav className={styles.toolbar_nav}>
				<div className={styles.toolbar_toggle_button}>
					<DrawerToggleButton dtch={props.dtch}/>
				</div>
				<div className={styles.toolbar_logo}>
					<a href="/">THE LOGO</a>
				</div>
				<div className={styles.spacer}/>
				<div className={styles.toolbar_nav_items}>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default toolbar;