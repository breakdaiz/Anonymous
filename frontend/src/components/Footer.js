import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';


const Footer = () => {
  return (
    <Container>
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>
              Copyright &copy; EShop 2022
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
    
  )
}

export default Footer