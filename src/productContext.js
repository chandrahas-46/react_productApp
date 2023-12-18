// react hooks
import { createContext, useContext, useEffect, useState } from "react";

// toast notification
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from "react-toastify";



// create contextAPI for product 
export const productContext = createContext();


// custom context hook 
export function useProductContext(){
    const value=useContext(productContext);
    return value;
}


// custom Provider
export function ProductContext({children}){

    const [data,setdata]=useState([]);

    useEffect(() => {
        // Fetch data from "https://dummyjson.com"
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
            const fetchedData = data.products;
            // setLoading(false);
            setdata(fetchedData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            // setLoading(false);
        });
    }, []); // Run only once when the component mounts


    return(
        <productContext.Provider  value={{data}}>
            {children}
        </productContext.Provider>
    );
}