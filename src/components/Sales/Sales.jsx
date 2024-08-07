/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import ProductCard from "../ProductCart/ProductCart";

import style from "../../App.module.css"
import styles from "./Sales.module.css"

function Sales({ products = [], amount, title }) {
    
    const discountedProducts = products.filter(product => product.discont_price);
  
    
    const productsToDisplay = discountedProducts.slice(0, amount);
  
    return (
        <section className={style.container}>
          {title && (
            <div className={style.titleBlock}>
            <h2>Sales</h2>
            <div className={style.titleBlockLine}></div>
            <Link to="/discounted-products" className={style.titleBlockButton}>
              All sales
            </Link>
          </div>
          )}
            
            <div className={styles.salesContainer}>
                
                {productsToDisplay.map(product => (
                    <Link to ={`/products/${product.id}`} key={product.id}>
                        <ProductCard
                            product={product}
                        />
                </Link>
                ))}
            </div>
      </section>
    );
  }
  
  export default Sales;