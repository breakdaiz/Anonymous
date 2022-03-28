import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";

import { addToCart, removeToCart } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";

// Bootstrap Components
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";

const CartScreen = () => {
  const navigate = useNavigate();

  const match = { params: useParams() };
  let location = useLocation();
  let productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    console.log("Remove From Cart", id);
    dispatch(removeToCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <Row>
      <Col md={8}>
        <h1> Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => {
              return (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <FormControl
                        as='select'
                        value={item.qty}
                        onChange={(e) => {
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          );
                        }}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        size='lg'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>

            <ListGroupItem className='d-grid gap-2'>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}>
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
