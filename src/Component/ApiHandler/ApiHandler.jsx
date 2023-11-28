import React, { useState, useEffect,createContext, useContext } from 'react';
import productDatabase from '../ProductDatabase/ProductDatabase';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

const ApiHandler = ({children}) => {

    const [localApi, setLocalApi] = useState([]);
    const [localApiLoading, setLocalApiLoading] = useState(true);
    const [webApi, setWebApi] = useState([]);
    const [webApiLoading, setWebApiLoading] = useState(true);
    const [error, setError] = useState('');
    const [generalError, setGeneralError] = useState('');
    
    const selectedProducts = [1, 4, 7, 9, 13,15];
    const selectedProductsData = localApi.filter(product => selectedProducts.includes(product.id));

    const fetchLocalData = async () => {
            try {
                setTimeout(() => {
                    setLocalApi(productDatabase);
                    setLocalApiLoading(false);
                }, 2000);
            } catch (error) {
                setError('Error fetching local data: ' + error.message);
                console.error('Error fetching local data:', error);
            }
        };

        const fetchWebData = async () => {
            try {
                const WebApiData = await axios.get("https://api.escuelajs.co/api/v1/products");
                setWebApi(WebApiData.data);
                setWebApiLoading(false);
            } catch (error) {
                setError('Error fetching web data: ' + error.message);
                console.error('Error fetching web data:', error);
            }
        };

        useEffect(() => {
            fetchLocalData();
            fetchWebData();
          }, []); // Run once on mount

          // Calculate bestsellerData 
          const bestsellerData = localApi
          .sort((a, b) => b.salesCount - a.salesCount)
          .slice(0, 5);

        // Calculate best-rated products 
        const bestRatedData = localApi
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);
          
          const combineData = {
            localApi,
            localApiLoading,
            webApi,
            webApiLoading,
            error,
            selectedProductsData,
            bestRatedData,
            bestsellerData,
          };
        
          if (localApiLoading || webApiLoading) {
            console.log('Data loading....');
          } else if (error || generalError) {
            console.error('Error:', error || generalError);
          }
          else {
            console.log('Local API Database:', localApi);
            console.log('Web API Database:', webApi);
          }

  return (
    <DataContext.Provider value={combineData}>
        {children}
    </DataContext.Provider>
  )
}

export default ApiHandler

