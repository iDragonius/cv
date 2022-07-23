import { configureStore } from '@reduxjs/toolkit'
import responsiveSlice, { viewSidebar } from './slices/responsiveSlice'

export const store = configureStore({
	reducer: {
		responsive: responsiveSlice,
	},
})
