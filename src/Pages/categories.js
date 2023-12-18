import React, { useState, useEffect } from 'react';
import { useProductContext } from "../productContext";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

// render the cart page
export function Categories(){
    const {data} = useProductContext();

    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        // Extract unique categories from the data
        const categories = [...new Set(data.map(item => item.category))];       
        // Set unique categories in the state
        setUniqueCategories(categories);
    }, [data]);

    return(
        <div>
            {uniqueCategories.map((category) => (
                <Link to={`/products/category/${category}`}>
                    <button className={styles.cat}>{category}</button>
                </Link>
            ))}
        </div>
    );
}