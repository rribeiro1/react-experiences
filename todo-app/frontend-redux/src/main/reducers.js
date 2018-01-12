import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

//Será o estado da aplicação controlado pelo Redux
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer