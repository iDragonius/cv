import React from 'react'
import styles from './contact.module.scss'
import { IoArrowForwardOutline } from 'react-icons/io5'

const Contact = () => {
	return (
		<div>
			<p className={styles.title}>Contact</p>
			<a href='https://github.com/iDragonius' className={styles.view}>
				<span>GitHub</span>
				<IoArrowForwardOutline />
			</a>
			<a
				href='https://www.linkedin.com/in/ruslan-rustamov-28546a208/'
				className={styles.view}
			>
				<span>LinkedIn</span>
				<IoArrowForwardOutline />
			</a>
			<a href='mailto:rustamovruslan1205@gmail.com' className={styles.view}>
				<span>Email</span>
				<IoArrowForwardOutline />
			</a>
			<a href='tel:+994505638636' className={styles.view}>
				<span>Phone nubmer</span>
				<IoArrowForwardOutline />
			</a>
		</div>
	)
}

export default Contact
