import React from 'react'
import styles from './mainLayout.module.scss'
import Sidebar from './sidebar/Sidebar'
const MainLayout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.left}> {children}</div>
			<div className={styles.right}>
				<Sidebar />
			</div>
		</div>
	)
}

export default MainLayout
