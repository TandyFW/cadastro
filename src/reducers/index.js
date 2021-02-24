import { combineReducers } from 'redux';
import { cadastroReducer } from '../reducers/cadastroReducer';
import { loginReducer } from '../reducers/loginReducer';

export const rootReducer = combineReducers({
    cadastroReducer,
    loginReducer,
})
