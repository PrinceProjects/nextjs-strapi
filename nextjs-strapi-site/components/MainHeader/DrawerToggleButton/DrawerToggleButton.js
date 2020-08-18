import styles from './DrawerToggleButton.module.css'

const drawerToggleButton = (props) => {
	return(
		<button className={styles.toggle_button} onClick={props.dtch}>
			<div className={styles.toggle_button_line} />
			<div className={styles.toggle_button_line} />
			<div className={styles.toggle_button_line} />
		</button>
	)
}

export default drawerToggleButton;