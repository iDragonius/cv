import { createSlice } from '@reduxjs/toolkit'

const responsiveSlice = createSlice({
	name: 'responsive',
	initialState: {
		clicked: false,
	},
	reducers: {
		viewSidebar(state) {
			state.clicked = !state.clicked
		},
	},
})

export default responsiveSlice.reducer
export const { viewSidebar } = responsiveSlice.actions
