import { handleActions } from 'redux-actions'

export const GameStore = {
	complexity: null,
	score: 0
}

export default handleActions({
	UPDATE_COMPLEXITY_DETAILS: (state, { payload }) => {
		return Object.assign({}, state, {
			complexity: payload
		})
	},
	UPDATE_SCORE_DETAILS: (state, { payload }) => {
		return Object.assign({}, state, {
			score: payload
		})
	}
}, GameStore)
