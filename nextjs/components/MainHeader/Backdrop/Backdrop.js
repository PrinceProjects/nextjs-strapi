import styles from './Backdrop.module.css';

const backdrop = (props) => {
	if (!props.show){
		return null
	}
	return (
		<>
			<div className={styles.backdrop} onClick={props.bkch}/>
		</>
	);
}

export default backdrop;