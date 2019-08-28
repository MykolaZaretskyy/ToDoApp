import {ADD_ITEM} from './actions'

//that's the initial items to display in FlatList
const initialState = {
    items: [
        { text: 1},
        { text: 2},
        { text: 3},
    ]
}

export const itemsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                items: state.items.concat({
                    text: state.items.length + 1
                })
            };
        default:
            return state;        
    }
  }