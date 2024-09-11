import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function NavBar() {
  //subscriber hook automatically gives new count when change in cart
  const count = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme='dark' className='sticky-top z-50'>
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              alt=""
              src="/storelogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Apna Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          <div className='d-flex'>
              <p className='ms-auto mt-1 justify-center text-white'>Cart Itmes : {count.length}</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;