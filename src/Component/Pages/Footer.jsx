import React,{useState} from 'react'
import { Container, Row, Col,Form, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

  const Footer = () => {
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubscribe = () => {
      console.log('Subscribed:', email);
    
    };
  return (
    <footer className='dark-bg text-light footer-wrapper'>
    <Container bg="dark">
      <Row>
        <Col lg={4}>
          <h4>Don't compromise on quality!</h4>
          <div className='social-icons'>
            <h5>Social Media</h5>
            <ul className="list-unstyled d-flex flex-row">
                <li><FaFacebook /> </li>
                <li><FaTwitter /> </li>
                <li><FaInstagram /> </li>
                <li><FaLinkedin /> </li>
            </ul>
          </div>
          <div className='download-app'>
            <h5>DOWNLOAD APPS</h5>
              <ul className="list-unstyled">
                <li><FaApple /> Download on the App Store</li>
                <li><FaGooglePlay /> Get it on Google Play</li>
              </ul>
          </div>
          <div className='newsletter'>
          <h5>Subscribe to the newsletter</h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Your E-mail"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleSubscribe}>
                Submit
              </Button>
            </Form>
            <h5>Sign up to get the latest</h5>
            <p>
              on new Products, Promotions, Design news and more
            </p>
           
            <h5>Need help? Call now!</h5>
            <p>(500) 8001 8588, (500) 544 6550</p>
          </div>
        </Col>
        <Col lg={8}>
          <Row className='d-flex'>
              <Col md={3}>
                <h5>About Electron</h5>
                <ul className="list-unstyled">
                  <li>Electron Inside</li>
                  <li>About Us</li>
                  <li>Company</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>Electron Inside</li>
                  <li>About Us</li>
                  <li>Company</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Brands</h5>
                <ul className="list-unstyled">
                  <li>Samsung</li>
                  <li>Apple</li>
                  <li>LG</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Brands</h5>
                <ul className="list-unstyled">
                  <li>Samsung</li>
                  <li>Apple</li>
                  <li>LG</li>
                </ul>
              </Col>
              </Row>
              <Row className='d-flex'>
              <Col md={3}>
                <h5>Smart Phones</h5>
                <ul className="list-unstyled">
                  <li>Order Tracking</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Tutorials</li>
                  <li>FAQ</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Smart TV</h5>
                <ul className="list-unstyled">
                  <li>Order Tracking</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Tutorials</li>
                  <li>FAQ</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Accessories</h5>
                <ul className="list-unstyled">
                  <li>Order Tracking</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Tutorials</li>
                  <li>FAQ</li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Bestseller</h5>
                <ul className="list-unstyled">
                  <li>Iphone 14 Pro Max</li>
                  <li>Iphone 13 Pro Max</li>
                  <li>Samsung Note 21 Ultra</li>
                  <li>Xiaomi Vacuum Cleaner</li>
                </ul>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer