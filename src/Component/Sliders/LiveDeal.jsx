import React, {useEffect, useState} from "react";
import { useData } from "../ApiHandler/ApiHandler";
import Product from "./Product";
import ProductList from "./ProductList";

const LiveDeal = () =>{
    const {localApi, localApiLoading} = useData();

    const selectedProducts = [1, 4, 7, 9, 13, 15];

    const selectedProductsData = localApi.filter(product => selectedProducts.includes(product.id));

    return(
        <>
         <div className="live-deals-wrapper" md={6} xs={12}>
          <div className="dot-container d-flex" id="container-new-dot">
            <div className="dot"></div>
            <div className="pulse"></div>
            <div className="deals-head">
              <h2 className='text-bold primary-font'>Live Deals</h2>
            </div>
        </div>
        </div>
        <div className="live-deals-wrapper" md={6} xs={12}>
        {/* ... (existing LiveDeals code) */}
        <div className="deals-list-wrapper">
          {(localApiLoading) ? (
            <div className='loading-container'>
              <img src='https://icons8.com/preloaders/preloaders/1475/Skateboarding.gif' alt="Loading" />
            </div>
          ) : (
            <div className="live-deal-wrapper row-flex-wrapper">
              <ProductList 
                products={selectedProductsData}
                showOriginalPrice={true} 
                showDiscountPrice={true}
                layoutType="flex-column"
              />
            </div>
          )}
        </div>
      </div>
    </>
    )
}
export default LiveDeal;