import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeFromCart ,checkout } from '../redux/slices/cartSlice'



function Cart() {
  const {cart}=useSelector(state=>state.cartSlice)
  const dispatch=useDispatch()
  console.log(cart)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <h1 className="mb-3">Cart Summary</h1>
            {cart.length>0 ? 
            <table className="table table-info">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total PRICE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.thumbnail} alt="product" /></td>
                  <td>$ {item.price}</td>
                  <td><button className='btn' onClick={()=>dispatch(incrementQuantity(item.id))}>+</button><span className='border border-1 border-dark p-2'>{item.quantity}</span><button className='btn'  onClick={()=>dispatch(decrementQuantity(item.id))}>-</button></td>
                  <td>Rs {item.price*item.quantity}</td>
                  <td><button className="btn" onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></button></td>
                </tr>
                ))}
              </tbody>
            </table>
            :<h2 className='text-warning'>No Products in the Cart.</h2>}
          </div>
          <div className="col-sm-12 col-md-3">
            <div style={{backgroundColor:"#a6a9ad"}} className='m-3 p-3'>

              <h5 className='text-light'>Total Products: <span>{cart.length}</span></h5>
              <h5 className='text-light'>Total Amount: <span>$ {Math.ceil(cart.reduce((prev,acc)=>prev+acc.price*acc.quantity,0))}</span></h5>
              <div className="d-grid">
                <button className="btn btn-success" onClick={()=>dispatch(checkout())}>Checkout</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart