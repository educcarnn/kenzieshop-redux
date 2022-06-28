import { add, remove } from "./actions"

const cart = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case add: 
        console.log('Olá')
        const {product} = action
        return [...state, product]
    
        case remove: 
        const {id} = action
        const listNew = cart.filter((product) => product.id !== id);
        return listNew

        default:
        return state
    }
}

export default cart