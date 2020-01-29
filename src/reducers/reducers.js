import { handleActions } from 'redux-actions';

export const GameStore = {
    complexity: null,
    score: 0
};

export default handleActions({
    UPDATE_COMPLEXITY_DETAILS: (state, {payload} ) => {
        return [
            ...state,
            payload
        ]
    }
}, GameStore);