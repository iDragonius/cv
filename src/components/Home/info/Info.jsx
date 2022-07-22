import React from 'react'
import styles from './info.module.scss'
import avatar from '../../../assets/img/avatar3.png'
const Info = () => {
	return (
		<div className={styles.info}>
			<div className={styles.imgContainer}>
				<img src={avatar} alt='avatar' />
			</div>
			<div className={styles.infoMain}>
				<div className={styles.infoName}>
					<p>Ruslan Rustamov</p>
					<span>@dragonius</span>
				</div>
				<p className={styles.infoJob}>Full Stack Web Developer</p>
			</div>
		</div>
	)
}

export default Info
