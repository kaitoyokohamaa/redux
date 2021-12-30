import {createStore} from 'redux';

// Reducer
const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    return {counter: state.counter + 1};
  }
  if (action.type === 'decrement') {
    return {counter: state.counter - 1};
  }
  return state;
};

// storeにreducerを登録
const store = createStore(counterReducer);
export default store;
