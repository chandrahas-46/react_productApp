import styles from "../../styles/home.module.css";

// component to render single product item on the screen
export default function ItemCard(props){    
    // getting all the value of product from props
    const {thumbnail,price,category, title}=props.item;
    return(
        <>  
            {/* main container */}
            <div className={styles.cardContainer} >
                
                {/* image container */}
                <div className={styles.imageContainer}>
                    <img src={thumbnail} alt={category} />
                </div>

                {/* description of the product title,price, add button */}
                <div className={styles.itemInfo}>
                    <div className={styles.namePrice}>
                        {/* name of product */}
                        <div className={styles.name}>
                            {title} 
                        </div>

                        {/* price of the product */}
                        <div className={styles.price}>
                            &#8377;{price}   
                        </div>
                    </div>
                    
                    {/* add to cart button */}
                    <div className={styles.btnContainer}>
                        <button className={styles.addBtn}>
                            Product description
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}