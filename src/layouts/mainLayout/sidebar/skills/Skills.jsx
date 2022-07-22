import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import styles from './skills.module.scss'
const Skills = ({ name, percent }) => {
	return (
		<div>
			<div>
				<div className={styles.skill}>
					<span>{name}</span>
					<span>{percent}%</span>
				</div>
				<ProgressBar
					className={styles.progress}
					maxCompleted={100}
					completed={percent}
					bgColor={'rgba(255,255,255,0.6)'}
					baseBgColor={'rgba(255,255,255,0.1)'}
					customLabel='HTML'
					isLabelVisible={false}
					animateOnRender
					borderRadius={0}
					height={5}
				/>
			</div>
		</div>
	)
}

export default Skills
