import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import TotalAmount from '../components/TotalAmount';
function Cart() {
  //Fetching from redux cart
  const product = useSelector((state)=>state.cart);
  
  return (
    <div className='container-fluid row mt-3'>
      {
        product.length===0?<h1 className='text-center'>No Item in Cart! Please Add Item to Cart</h1>:
        <>
          <div className='customDiv'>
          {
            product.map((item)=>{
              return (
                <ProductCard {...item} key={item.id} status={0}/>
              )
            })
          }
      </div>
      <div className='customFix'>
          <TotalAmount/>
      </div>
        </>
      }
      
    </div>
  )
}

export default Cart
