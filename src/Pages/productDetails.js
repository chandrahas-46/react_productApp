import { useParams } from "react-router-dom";
import { useProductContext } from "../productContext";
import styles from "../styles/navbar.module.css";

export function ProductDetails() {
    const {data} = useProductContext();
    const { id } = useParams();
    // console.log("ParamId ",id);
    const item = data.find((item) => JSON.stringify(item.id) === id);

    return (
        <>  
            <div className={styles.productdetails}>
                <h3>Product Descriptions</h3>
                <div>
                    {`Name: ${item.title}`} <br/>
                    {`Details: ${item.description}`} <br/>
                    {`Price: ${item.price}`} <br/>
                    {`Discount: ${item.discountPercentage}`} <br/>
                    {`Rating: ${item.rating}`} <br/>
                    {`Stock: ${item.stock}`} <br/>
                    {`Brand: ${item.brand}`} <br/>
                    {`Category: ${item.category}`} <br/>
                </div>                           
            </div>
        </>
    );
}

