import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartitems }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalamount = useSelector(state => state.totalamount)

  const incrementHandler = (item) => {
    dispatch({type:'incrementquantity', payload: {...item,quantity: item.quantity+1}})
  }

  const decrementHandler = (item) => {
    if(item.quantity > 1)
    dispatch({type:'decrementquantity', payload: {...item,quantity: item.quantity-1}})
  }

  return (
    <div className="d-flex">
      <table className="table">
        <thead>
          <tr>
            <th className="col-4">Product</th>
            <th className="col-2">Price</th>
            <th className="col-3" style={{marginRight:'25%'}}>Quantity</th>
            <th className="col-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartitems.map((item) => (
            <tr key={item.id}>
              <td>
                <div style={{ display: 'flex' }}>
                  <i class="fa fa-light fa-circle-xmark fa-lg" style={{  marginRight: '0.2%' }} onClick={() => dispatch({ type: 'removefromcart', payload: item })}></i>
                  <img src={item.image} height="200px" width="150px" alt="clothes" />
                  <b style={{ marginTop: '15%', marginLeft: '0.2%' }}>{item.name}</b>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid', borderRadius:'7px',padding:'10px',width:'75%'}}>
                      <i className="fa fa-thin fa-minus" style={{marginRight:'35%'}} onClick={() => decrementHandler(item)}></i>
                      <b>{item.quantity}</b>
                      <i className="fa fa-thin fa-plus" style={{marginLeft:'35%'}} onClick={() => incrementHandler(item)}></i>
                  </div>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container-fluid border border-primary rounded w-25" style={{marginBottom:'20%'}}>
         <h4 style={{marginTop:'8%'}}>Cart Totals</h4>
         <div className="d-flex" style={{justifyContent:'space-between',marginTop:'15%'}}>
            <h6>Subtotal</h6>
            <h6>${totalamount}</h6>
         </div>
         <hr/>
         <div className="d-flex" style={{justifyContent:'space-between',marginTop:'15%'}}>
            <h4>Total</h4>
            <h4>${totalamount}</h4>
         </div>

         <button style={{padding:'10px',border:'2px solid blue', backgroundColor:'blue',borderRadius:'10px',color:'white',marginTop:'10%',marginLeft:'15%'}} onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
