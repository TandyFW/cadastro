const INITIAL_STATE = {
  loggedIn: false,
}
  
export const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'VERIFY_LOGIN':
      return {...state, loggedIn: action.payload.loggedIn}
    default:
      return state;
  }
}
