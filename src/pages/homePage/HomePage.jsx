import React from 'react'
import Education from '../../components/Home/education/Education'
import Experience from '../../components/Home/experience/Experience'
import Info from '../../components/Home/info/Info'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import styles from './homePage.module.scss'
const HomePage = () => {
	return (
		<MainLayout>
			<Info />
			<p className={styles.experience}>Experience</p>
			<Experience />
			<Experience />
			<p className={styles.education}>Education</p>
			<Education />
			<p className={styles.links}>Links</p>
		</MainLayout>
	)
}

export default HomePage
