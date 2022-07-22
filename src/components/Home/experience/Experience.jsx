import React from 'react'
import styles from './experience.module.scss'
import { IoArrowForwardOutline } from 'react-icons/io5'
const Experience = () => {
	return (
		<div className={styles.experience}>
			<div className={styles.work}>
				<h3>Front-end developer, ReactJS</h3>
				<p>2022 - Present</p>
			</div>
			<p className={styles.workInfo}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos
				dolorum consequuntur iusto velit illo, nesciunt aperiam obcaecati maxime
				architecto! Officiis unde cupiditate iste veniam accusantium recusandae,
				temporibus vero Lorem, ipsum dolor sit amet consectetur adipisicing
				elit. Ab quibusdam repudiandae quia enim, id dolores nemo. Sunt
				provident molestias nesciunt, quibusdam deleniti dolores ducimus
				recusandae obcaecati necessitatibus earum, error distinctio.
			</p>
			<div className={styles.view}>
				<span>View work</span>
				<IoArrowForwardOutline />
			</div>
		</div>
	)
}

export default Experience
