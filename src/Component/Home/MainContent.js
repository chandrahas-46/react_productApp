// import styles 
import styles from "../../styles/home.module.css";
// import component to render a single item in the list
import ItemCard from "./ItemCard";
// custom context hook 
import { useProductContext } from "../../productContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


// to show all the products
export default function MainContent(props){

    const { category_name } = useParams(); 
    // values form props to filter list
    const {search,price,applyFilter}=props;
    
    // product data 
    const {data} = useProductContext();
    // Convert the search data to lowercase (or uppercase)
    const normalizedsearch = search.toLowerCase();

    return(
        <div className={styles.itemContainer}>
            {/* filter on the basis of search bar */}
            {   category_name? data.filter((item) => {
                    return item.category === category_name
                })
                .map((item) => (
                    <Link to={`/products/${item.id}`}>
                        <ItemCard key={item.id} item={item} />
                    </Link>
                    ))
                :
                data.filter((item) => {
                        return search.toLocaleLowerCase() === ''
                        ? item
                        :item.title.toLocaleLowerCase().includes(normalizedsearch)})
                // filter on the basis of price range
                .filter((item) => {
                        return !applyFilter
                        ? item
                        :item.price <= price})
                .map((item) => (
                    <Link to={`/products/${item.id}`}>
                        <ItemCard key={item.id} item={item} />
                    </Link>
                    ))
            }
        </div>
        
    )
}