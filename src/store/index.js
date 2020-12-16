import { createStore } from 'redux';



const initialState = {
    inputValue: '',
    messages: [],
    id : 0
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
    switch (action.type){
        case 'INPUT_CHANGE':
            return Object.assign({}, state, { inputValue: action.text });
        case 'INPUT_SUBMIT':
            let obj = state.messages.concat(action.messages)
            return  Object.assign({}, state, { messages: obj, inputValue: ''});
        case 'INPUT_REMOVED':
            return Object.assign({}, state, { messages: state.messages.filter(messages => messages.id !== action.messages.id)});
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;