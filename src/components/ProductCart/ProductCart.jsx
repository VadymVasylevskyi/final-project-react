/* eslint-disable react/prop-types */
import styles from "./ProductCart.module.css";
import RegularButton from "../RegularButton/RegularButton";
import { API_URL } from "../../utils";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useState } from "react";

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false)
  

  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Остановка всплытия события
    event.preventDefault();  // Остановка действия по умолчанию (переход по ссылке)
    dispatch(addToCart({ ...product, quantity: 1 }));
    setIsAdded(true)
  };
  console.log(handleAddToCart)
  const percentDiscount = product.discont_price
    ? Math.ceil(((product.discont_price - product.price) / product.discont_price) * 100)
    : null;

  return (
    <div className={styles.cardStyles}>
      <div className={styles.cardTopSection}>
        {/* {overlay && ( */}
          <div className={styles.overlayStyle}>
            <div
              className={styles.discountStyle}
              style={{ visibility: percentDiscount ? "visible" : "hidden" }}
            >
              {percentDiscount && `${percentDiscount}%`}
            </div>

            <RegularButton isActive={isAdded} onClick={handleAddToCart}>
              {isAdded ? 'Added' : 'Add to Cart'}
            </RegularButton>
          </div>
        {/* )} */}

        <img src={`${API_URL}${product.image}`} alt={product.title} />
      </div>
      <div className={styles.cardBottomSection}>
        <p title={product.title}>{product.title}</p>
        {product.discont_price !== null ? (
          <>
            <span className={styles.activePriceStyle}>${product.discont_price}</span>
            <span className={styles.inactivePriceStyle}>${product.price}</span>
          </>
        ) : (
          <span className={styles.activePriceStyle}>${product.price}</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
