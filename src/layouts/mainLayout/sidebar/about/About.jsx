import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewSidebar } from '../../../../store/slices/responsiveSlice'
import styles from './about.module.scss'
const About = () => {
	const clicked = useSelector(state => state.responsive)
	const dispatch = useDispatch()
	return (
		<div className={styles.main}>
			<div className={styles.responsiveContainer}>
				<h3 className={styles.title}>About</h3>
				<p
					className={styles.responsiveX}
					onClick={() => dispatch(viewSidebar())}
				>
					X
				</p>
			</div>
			<p className={styles.content}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat
				a natus earum facere mollitia qui maxime iure. Excepturi nulla
				perferendis asperiores ipsam ratione odio, laudantium culpa distinctio
				obcaecati a.
			</p>
		</div>
	)
}

export default About
