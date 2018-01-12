import { combineReducers } from 'redux'

//Será o estado da aplicação controlado pelo Redux
const rootReducer = combineReducers({
    todo: () => ({
        description: 'Insira uma nova tarefa aqui',
        list: [{
            _id: 1,
            description: 'Pagar conta de água',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe',
            done: false
        }]
    })
})

export default rootReducer