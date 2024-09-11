import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import React, { useState ,useEffect} from 'react';

function TotalAmount() {
    //fetching from cart
    const product = useSelector((state)=>state.cart);
    const [amount ,setAmount] = useState(0);
    useEffect(() => {
        // Calculate the total amount only when the product list changes
        const total = product.reduce((acc, item) => acc + item.price, 0);
        setAmount(total);
      }, [product]);
    //let amount = 0;
    return (
    <Card className='customCard'>
      <Card.Body>
        <Card.Title>Total Amount</Card.Title>
          { 
            product.map((item)=>{
                return(
                    <div key={item.id}>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.price}
                        </div>
                    </div>
                    <hr/>
                    </div>
                )
            })
          }
    
        <h3>Total Amount is:${amount}</h3>
      </Card.Body>
    </Card>
  );
}

export default TotalAmount;