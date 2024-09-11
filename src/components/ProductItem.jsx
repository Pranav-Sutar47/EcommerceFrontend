import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext';
import Loader from './Loader';
import Button from 'react-bootstrap/esm/Button';
import { showToast } from './ToastComponent';
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'

export default function ProductItem(props) {
  const context = useContext(ProductContext);
  const [loading,setLoading] = useState(true);
  const [product,setProduct] = useState({});
  const {id} = context;
  const dispatch = useDispatch();

  const handleClick=()=>{
    dispatch(add(product));
    showToast('Product Added to Cart!','success');
  }

  useEffect(()=>{
    const data = async()=>{
        const res =await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await res.json();
        setProduct(json);
        setLoading(false);
    }
    data();
  },[id])
  const display = ()=>{
    showToast('We are working on it!','info');
  }
    return (
    <>
      {loading ? <Loader/>:
        <div className='container-fluid row mt-3'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 fixed-div'>
            <img src={product.image} alt='' className='itemImg'/>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6 mt-2 scrollable-div'>
            <h1>{product.title}</h1>
            <h2>$ {product.price}</h2>
            <h3>{product.category.charAt(0).toUpperCase()+product.category.slice(1)}</h3>
            <h4><span><img alt='' src='rating.png' className='customRating'/>&nbsp;{product.rating.rate}</span></h4>
            <div className='d-flex mb-2'>
              <Button className='btn ' onClick={handleClick}>Add to Cart</Button>
              <Button className='btnG ms-auto' onClick={display}>Buy Now</Button>
            </div>
            <p className='text-wrap'>
              {product.description}
            </p>
           <h5>Total Deliveries - {product.rating.count}</h5>
        </div>
      </div>
      }
    
    </>
  )
}
