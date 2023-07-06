import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs"
import "./Products.css";

function Products() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" />
          <div className="card-details">
            <h3>Shoe</h3>
            <div className="rating">
              <div className="">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              </div>
              <span>(123 reviews)</span>
            </div>
          </div>
          <div className="card-price">
            <div>
              <del className='del'>$399</del>100
            </div>
            <BsFillBagHeartFill />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;