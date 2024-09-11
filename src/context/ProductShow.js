import React, { useState } from 'react'
import ProductContext from './ProductContext';

function ProductShow(props) {
    const [id,setid] = useState(1);
    const changeId = (id)=>{
        setid(id);
    }
  return (
    <ProductContext.Provider value={{id,changeId}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductShow
