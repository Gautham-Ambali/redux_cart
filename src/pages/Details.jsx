import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addtoWishList } from '../redux/slices/wishSlice'
import { addToCart } from '../redux/slices/cartSlice'




function Details() {
    const {id}=useParams()
    // const {products} = useSelector((state) => state.productSlice);
    const dispatch=useDispatch()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        getProduct()
    },[])

    function getProduct(){
        const products=JSON.parse(sessionStorage.getItem("apiData"))
        const res=products.find((item)=>item.id==id)
        setProduct(res)
    }
    // console.log(product)

  return (
    <>
       <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">ID:{product?.id}</div>
                        <h1 className="display-5 fw-bolder">{product?.title}</h1>
                        <div className="fs-5 mb-5">
                            
                            <span>${product?.price}</span>
                        </div>
                        <p className="lead">{product?.description}</p>
                        <div className="d-flex justify-content-between">
                    <button className="btn" onClick={()=>dispatch(addToCart(product))}>
                      <i className="fa-solid fa-cart-plus fa-2xl text-success"></i>
                    </button>
                    <button className="btn" onClick={()=>dispatch(addtoWishList(product))}>
                      <i className="fa-solid fa-heart-circle-plus fa-2xl text-danger"></i>
                    </button>
                  </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Details