import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsThunk, nextPage, previousPage } from "../redux/slices/productSlice";
import { addtoWishList } from "../redux/slices/wishSlice";
import { addToCart } from "../redux/slices/cartSlice";



function Landing() {
  const state = useSelector((state) => state.productSlice);
  const {products,error,loading,productsPerPage,currentPage}=state;

  const totalPage=Math.ceil(products.length/productsPerPage)
  const firstIndex=(currentPage-1)*10;
  const lastIndex=currentPage*10

  
  console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);


  function handlePrev(){
    if(currentPage>1){

      
      dispatch(previousPage())
    }
  }
  function handleNext(){
    if(currentPage<totalPage){
      dispatch(nextPage())
      
    }
  }
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
            loading ?
            <h2>Loading...</h2>
            :error.length>0?
            <h2>{error}</h2>:
            products.slice(firstIndex,lastIndex).map((item)=>
            <div className="col mb-5">
              <div className="card h-100 border border-1 shadow ">
                <Link to={`/det/${item.id}`}>
                  <img
                    className="card-img-top"
                    src={item.thumbnail}
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{item.title.slice(0,10)}...</h5>
                    ${item.price}
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex justify-content-between">
                    <button className="btn"  onClick={()=>dispatch(addToCart(item))}>
                      <i className="fa-solid fa-cart-plus fa-2xl text-success"></i>
                    </button>
                    <button className="btn"  onClick={()=>dispatch(addtoWishList(item))}>
                      <i className="fa-solid fa-heart-circle-plus fa-2xl text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )
            }
            
            
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center my-5">
        <button className="btn"  onClick={handlePrev}><i className="fa-solid fa-backward fa-xl"></i></button>
        <span>{currentPage}/{totalPage}</span>
        <button className="btn" onClick={handleNext}><i className="fa-solid fa-forward fa-xl" ></i></button>
      </div>
    </>
  );
}

export default Landing;
