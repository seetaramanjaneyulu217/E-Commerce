import { createStore } from 'redux'

const initialState = {
    item: '',
    size: '',
    searchtext: '',
    cartitems: [],
    totalamount: 0
}


const reducer = (state = initialState, action) => {
    if(action.type === 'hoodies' || 
       action.type === 't-shirts' || 
       action.type === 'casuals' || 
       action.type === 'jackets' || 
       action.type === 'jeans' || 
       action.type === 'coat') {
        return {
            ...state,
            item: action.type
        }
    }

    if(action.type === 'small' || 
       action.type === 'Medium' || 
       action.type === 'L' || 
       action.type === 'XL' || 
       action.type === 'XXL') {
        console.log(action.type)

        return {
            ...state,
            size: action.type
        }
    }

    if(action.type === 'reset') {
        return {
            ...state,
            item: '',
            size: ''
        }
    }

    if(action.type === 'searchtext') {
        return {
            ...state,
            searchtext: action.payload
        }
    }

    if(action.type === 'addtocart') {

        return {
            ...state,
            cartitems:[...(state.cartitems),action.payload],
            totalamount: state.totalamount + (action.payload.price * action.payload.quantity)
        }
    }

    if(action.type === 'removefromcart') {
        state.cartitems = state.cartitems.filter(item => {return item.id !== action.payload.id})
        return {
            ...state,
            cartitems: [...(state.cartitems)],
            totalamount: state.totalamount - (action.payload.quantity * action.payload.price)
        }
    }

    if(action.type === 'incrementquantity') {

        state.cartitems.forEach(item => {
            if(item.id === action.payload.id) {
                item.quantity = action.payload.quantity
            }
        })

        return {
            ...state,
            cartitems: [...(state.cartitems)],
            totalamount: state.totalamount + action.payload.price
        }
    }

    if(action.type === 'decrementquantity') {

        state.cartitems.forEach(item => {
            if(item.id === action.payload.id) {
                item.quantity = action.payload.quantity
            }
        })

        return {
            ...state,
            cartitems: [...(state.cartitems)],
            totalamount: state.totalamount - action.payload.price
        }
    }
    
    return state
}


const store = createStore(reducer)

export default store