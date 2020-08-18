import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
	if (!props.show){
		return null
	}
	return (
		<nav className={styles.side_drawer}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About</a>
				</li>
			</ul> 
		</nav>
	);
}

export default sideDrawer;