import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { RiArrowRightLine } from "react-icons/ri";
import { useData } from '../ApiHandler/ApiHandler';
import ProductList from './ProductList';
import Product from './Product';
import Slider from 'react-slick';



const Categories = () => {
  const { bestsellerData, bestRatedData } = useData();

  const commonSliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
  };
  
  const sliderSettingBestseller = {
    ...commonSliderSettings,
    rtl: false, 
  };
  const sliderSettingBestRated = {
    ...commonSliderSettings,
    rtl: true, 
  };

  return (
    <Container>
      <Row className="best-online-deal d-flex justify-content-between flex-row">
        <Col lg={3} md={6} xs={12}>
          <div className='best-deal-products d-flex flex-column bg-brown'>
            <a href="#" title='See More Products'>
              <div className='content'>
                  <h4 className='title'>Apple Ipad New Generation</h4>
                  <p className='desx'>Up to 20% off Apple Devices ​</p>
                  <span className='link'>See More Products</span>
              </div>
              <img src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/3-29-300x240.png" alt="Dealofday1"/>
            </a>
          </div>
        </Col> 
        <Col lg={3} md={6} xs={12} >
          <div className='best-deal-products d-flex flex-column bg-purple'>
                    <a href="" title='See More Products'>
                      <div className='content'>
                          <h4 className='title'>Apple Ipad New Generation</h4>
                          <p className='desx'>Up to 20% off Apple Devices ​</p>
                          <span className='link'>See More Products</span>
                      </div>
                      <img src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/4-24-300x240.png" alt="Dealofday2"/>
                    </a>
          </div>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <div className='best-deal-products d-flex flex-column bg-green'>
                    <a href="" title='See More Products'>
                      <div className='content'>
                          <h4 className='title'>Apple Ipad New Generation</h4>
                          <p className='desx'>Up to 20% off Apple Devices ​</p>
                          <span className='link'>See More Products</span>
                      </div>
                      <img src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/07/prodcut2-300x240.png" alt="Dealofday3"/>
                    </a>
              </div>
        </Col>
        <Col lg={3} md={6} xs={12}>
            <div className='best-deal-products d-flex flex-column bg-soft-purple'>
                <a href="" title='See More Products'>
                  <div className='content'>
                      <h4 className='title'>Apple Ipad New Generation</h4>
                      <p className='desx'>Up to 20% off Apple Devices ​</p>
                      <span className='link'>See More Products</span>
                  </div>
                  <img src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/2-33-300x240.png" alt="Dealofday4"/>
                </a>
            </div>
        </Col>
      
      </Row>
      
      <Row>
        <Col lg={6} xs={12}>
            <div className='best-seller carousel-container d-flex justify-content-between'>
              <h3 className='special-font'>Bestseller</h3>
              <p className=''>
                All Products
                <span><RiArrowRightLine /></span>
              </p>
            </div>
            <div className='best-seller-data'>

            <Slider {...sliderSettingBestseller} className="slider-container">
              
                {bestsellerData.map((product) => (
                  <div key={product.id}>
                    {/* Render your product component here */}
                    <Product 
                      product={product} 
                      products={bestsellerData}
                      showOriginalPrice={true} 
                      showDiscountPrice={true}
                      showRating={true}
                  />
                  </div>
                ))}
              </Slider>
            </div>
        </Col>
        <Col lg={6} xs={12}>
            <div className='best-rated carousel-container d-flex justify-content-between'>
              <h3 className='special-font'>Best Rated</h3>
              <p className=''>
                All Products
                <span><RiArrowRightLine /></span>
              </p>
            </div>
            <div className='best-rated-data'>
            <Slider  {...sliderSettingBestRated} >
              {bestRatedData.map((product)=>(
                <Product
                  product={product} 
                  products={bestRatedData} 
                  showOriginalPrice={true} 
                  showDiscountPrice={true}
                  showRating={true}
                  layoutType='flex-row'
                  className="slider-container"
                  />
                ))}
            </Slider>
            </div>
        </Col>
        </Row>
  </Container>
  )
}

export default Categories