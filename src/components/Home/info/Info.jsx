import React, { useState } from 'react'
import styles from './info.module.scss'
import avatar from '../../../assets/img/avatar3.png'
import { useDispatch } from 'react-redux'
import { viewSidebar } from '../../../store/slices/responsiveSlice'
const Info = () => {
	const dispatch = useDispatch(viewSidebar)
	const toggleMore = () => {
		dispatch(viewSidebar())
	}

	return (
		<div className={styles.infoMore}>
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
			<div onClick={toggleMore} className={styles.more}>
				...
			</div>
		</div>
	)
}

export default Info
