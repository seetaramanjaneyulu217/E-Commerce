import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CartInput = ({ row }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

  return (
    <div style={{fontSize:'110%'}}>
        <input type='number' placeholder="Enter the quantity" onChange={(e) => setQuantity(e.target.value)}></input>
        <i className="fa fa-solid fa-cart-shopping fa-lg"></i>
        <input type='checkbox' onChange={(event) => event.target.checked ? dispatch({type: 'addtocart', payload: {...row,quantity: +quantity}}) : dispatch({type: 'removefromcart', payload: {...row,quantity: +quantity}})}></input>
    </div>
)
}

export default CartInput