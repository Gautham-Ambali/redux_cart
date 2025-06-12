import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../redux/slices/productSlice";


function Header() {

  const {wishlist}=useSelector((state)=>state.wishSlice)
  const {cart}=useSelector((state)=>state.cartSlice)

  const dispatch=useDispatch()
  
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >
            <Link to={"/"} style={{textDecoration:'none'}}>
              <img
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxDN-XuKnm9mdhsrU8RKUUexiBksaI0z_atgIKJLthxUOM8tWA_y33NkTwJ05-RSqj0&usqp=CAU"
                height={"50px"}
              />{" "}
            Redux Cart
            </Link>
          </Navbar.Brand>
          <div>
            <input type="search" placeholder="Search by keyword..." className="form-control"  onChange={(e)=>dispatch(search(e.target.value))} />
          </div>
          <div>
            <Link
              to={"/wish"}
              className="btn border border-3 border-dark me-3 p-2"
            >
              <i class="fa-solid fa-heart text-danger"></i>{' '}
              WishList{' '}
              <span className="badge bg-dark">{wishlist.length}</span>
            </Link>
            <Link
              to={"/cart"}
              className="btn border border-3 border-dark me-3 p-2"
            >
              <i class="fa-solid fa-cart-shopping text-success"></i>{' '}
              Cart{' '}
              <span className="badge bg-dark">{cart.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
