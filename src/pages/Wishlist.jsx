import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishSlice'
import { addToCart } from '../redux/slices/cartSlice'




function Wishlist() {

const {wishlist}=useSelector((state)=>state.wishSlice)
const dispatch=useDispatch()
console.log(wishlist)

const addToCartHandler=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product.id))
}

  return (
    <>
      <div className="container-fluid">
        <h1 className='my-3'>Wishlist</h1>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {wishlist.length>0?<>
                    {wishlist.map(item=>(<div className="col mb-5">
                        <div className="card h-100 border border-1 shadow ">
                            <Link to={`/det/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." />
                            </Link>
                            <div className="card-body p-4">
                                <div className="text-center">
                             
                                    <h5 className="fw-bolder">{item.title}</h5>
                                  
                                    ${item.price}
                                </div>
                            </div>
                          
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               
                                <div className="d-flex justify-content-between">
                                  <button className="btn" onClick={()=>addToCartHandler(item)}>
                                    <i className="fa-solid fa-cart-plus fa-2xl text-success"></i>
                                  </button>
                                  <button className="btn" onClick={()=>dispatch(removeFromWishlist(item.id))}>
                                    <i className="fa-solid fa-heart-circle-xmark fa-2xl text-danger"></i>
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>))}
                    </>
                    :<h2>No Products Available...</h2>
                      
                      }
                    
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Wishlist