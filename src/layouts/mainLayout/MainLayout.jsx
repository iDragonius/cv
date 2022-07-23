import React from 'react'
import { useSelector } from 'react-redux'
import styles from './mainLayout.module.scss'
import Sidebar from './sidebar/Sidebar'
const MainLayout = ({ children }) => {
	const { clicked } = useSelector(state => state.responsive)
	return (
		<div className={styles.layout}>
			<div className={clicked ? styles.leftResponsive : styles.left}>
				{' '}
				{children}
			</div>
			<div className={clicked ? styles.rightResponsive : styles.right}>
				<Sidebar />
			</div>
		</div>
	)
}

export default MainLayout
