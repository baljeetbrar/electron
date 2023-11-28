import React from 'react'
import productsDatabase from '../ProductDatabase/ProductDatabase';

const MyContext = createContext();

const DataContext = () => {
    return (
        <>
            <MyContext.Provider values={productsDatabase}>
                {}
            </MyContext.Provider>
        </>
  )
}

export const useData = () => useContext(MyContext);
export default DataContext