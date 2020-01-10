const password = '4578';

const initialState = {
  password: '',
  access: false,
};

const passcode = (state = initialState, action)=> {
  switch (action.type) {
    case 'ENTER_NUM':
      return {...state, password : state.password.length < 4 ?  state.password + action.value : state.password };
    case 'DELETE_NUM':
      return  {...state, password: state.password.length > 0 ? state.password.slice(0, -1) : state.password};
    case 'CHECK_PASS':
      return {...state, access: state.password === password};
    default:
      return state
  }
  return state
};

export default passcode;
