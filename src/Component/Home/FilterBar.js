import styles from "../../styles/home.module.css";
// render the filter bar
export default function FilterBar(props){
    const {price,setPrice}=props;
    return(
        // main container of filter bar
        <div className={styles.filterBar}>
            <h2>
                Filter Product
            </h2>

            {/* price ranger and price slider  */}
            <div className={styles.priceRange}>
                {/* sub heading */}
                <span>Price</span>{` <= ${price}`}
                <br />
                {/* slider  */}
                <input type="range" 
                    min="100" 
                    max="3000" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </div>          
        </div>       
    )
}