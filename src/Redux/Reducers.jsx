import {get_words , send_score ,get_rank}    from './actionsTypes'

// Reducers

const initialState = {
    words: [],
    rank: 0,
}
export const TaskReducer = (state=initialState ,  action) => {
    switch(action.type) {
        case get_words:
            return {...state ,words: action.payload}
        case get_rank :     
             return {...state , rank: action.payload}
        default:
            return state;
    }
}
