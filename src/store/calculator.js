
const initialState = {
  sum: 0,
};

const calculator = (state = initialState, action)=> {
  switch (action.type) {
    case ('CLEAR_ALL'):
      return  {...state, sum: 0};
    case ('EVAL_TOTAL'):
      return  {...state, sum: eval(state.sum.replace(/\b0(\d+)\b/g, '$1'))};
    case('ADD_SYMBOL'):
      return {...state, sum: state.sum === 0 ? action.value : state.sum + action.value}
    default:
      return state
  }
  return state
};
export default calculator;