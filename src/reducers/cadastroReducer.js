const INITIAL_STATE = {
  clientes: [{name: 'fulano', age: '20', email: 'fulano@beltrano.com'}],
}

export const cadastroReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'REGISTER_CLIENTS':
      return {...state, clientes: state.clientes.concat({name: action.payload.name, age: action.payload.age, email: action.payload.email})};
    default:
      return state;
  }
}
