import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    Valor: function (state, action) {
        return {
            valor1: 7,
            valor2: 8
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig