import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
	let drawerClasses = ''
	if (props.show) {
		drawerClasses = 'open'
	}
	return (
		<nav className={`${styles.side_drawer} ${drawerClasses}`}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
			<style jsx>{`
				.open {
					transform: translateX(0);
				}
			`}</style> 
		</nav>
	);
}

export default sideDrawer;