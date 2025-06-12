import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="container-fluid bg-primary p-3">
      <div className="row">
        <div className="col">
          <h2 className='text-light'>Redux Cart</h2>
          <p style={{textAlign:"justify"}}
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sunt ullam atque dolorem, nesciunt at! Iure quia, dolor quaerat, eius doloribus optio deleniti fugiat consectetur harum maxime eligendi, commodi facere!</p>
        </div>
        <div className="col">
          <h2 className="text-light text-center">Links</h2>
          <div className="d-flex justify-content-center flex-column h-75 align-items-center">
            <Link  className='text-light' to={'/'} >Landing</Link>
            <Link  className='text-light' to={'/wish'} >Wishlist</Link>
            <Link  className='text-light' to={'/cart'} >Cart</Link>
          </div>
        </div>
        <div className="col">
          <h2 className="text-light">Feedbacks</h2>
          <textarea name="" id="" className='form-control my-3'></textarea>
          <button className="btn btn-success">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Footer