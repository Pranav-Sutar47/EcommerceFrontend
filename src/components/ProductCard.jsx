import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { showToast } from './ToastComponent';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function ProductCard(props) {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  const dispatch = useDispatch();

  if (!context) {
    throw new Error('ProductCard must be used within a ProductShow provider');
  }

  const { changeId } = context;

  const display = () => {
    navigate('/item');
  };

  const handleClick = () => {
    changeId(props.id);
    display();
  };
  const deleteItem = () => {
    dispatch(remove(props.id));
    showToast('Item Removed from Cart!');
  }
  return (
    <div className={`${props.status === 1 ? 'col-12 col-md-6 col-lg-3 col-xl-3 mt-3' : 'mt-2 mb-2'}`}>
      <Card className='m-0 p-0 card'>
        <Card.Img variant="top" src={props.image} className='customImg mt-1' />
        <Card.Body>
          <Card.Title className='customTitle'>{props.title}</Card.Title>
          <Card.Title className='customPrice'>${props.price}</Card.Title>
          <Card.Text className='customDes'>
            {props.description}
          </Card.Text>
          <div className='d-flex mb-2'>
            <Button className='btn m-1' onClick={handleClick}>View Product</Button>
            {
              props.status !== 1 ? <Button className='btn ms-auto btnR m-1' onClick={deleteItem}>Remove Product</Button> : <></>
            }
          </div>

        </Card.Body>
      </Card>
    </div>

  );
}

export default ProductCard;