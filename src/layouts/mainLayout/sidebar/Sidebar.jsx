import React from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Languages from './languages/Languages'
import styles from './sidebar.module.scss'
import Skills from './skills/Skills'
const Sidebar = () => {
	return (
		<div className={styles.main}>
			<About />
			<p className={styles.title}> Languages</p>
			<Languages name={'Azerbaijan'} percent={100} />
			<Languages name={'Russian'} percent={100} />
			<Languages name={'English'} percent={60} />
			<p className={styles.title}> Skills</p>
			<Skills name={'HTML/ CSS'} percent={100} />
			<Skills name={'JavaScript'} percent={75} />
			<Skills name={'ReactJS'} percent={60} />
			<Skills name={'Redux/ ReduxToolkit'} percent={60} />
			<Skills name={'REST API'} percent={55} />
			<Skills name={'NodeJS/ Express'} percent={65} />
			<Skills name={'MongoDB'} percent={75} />
			<Contact />
		</div>
	)
}

export default Sidebar
