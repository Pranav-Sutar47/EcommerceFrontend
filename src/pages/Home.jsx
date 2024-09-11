import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://fakestoreapi.com/products/');
      const json = await data.json();
      setProducts(json);
      setLoading(false);
    }
    api();
  }, []);
  return (
    <div>
      <div className='container mt-3'>
        <h1>Products</h1>
        {loading ? <Loader /> :
          <div className="row">
            {
              products.map((product) => {
                return <ProductCard key={product.id} {...product} status={1} />
              })
            }
          </div>

        }
      </div>
    </div>
  )
}

export default Home
