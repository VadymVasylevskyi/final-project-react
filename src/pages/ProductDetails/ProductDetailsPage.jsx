import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGetCategoriesQuery, useGetProductQuery } from "../../features/api/apiSlice"
import { API_URL } from "../../utils"
import { addToCart } from "../../features/cart/cartSlice"
import { useDispatch } from "react-redux"


import style from '../../App.module.css'
import styles from './ProductDetails.module.css'

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"
import Counter from "../../components/Counter/Counter"
import RegularButton from '../../components/RegularButton/RegularButton'


export default function ProductDetailsPage() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { productsId } = useParams();
  const { data: categoriesData } = useGetCategoriesQuery('/all');
  const { data: productData } = useGetProductQuery({ id: productsId });
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (productData && productData.length > 0) {
      setProduct(productData[0]);
    }
  }, [productData]);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);
   
  const getCategoryNameFromProduct = (product, categories) => {
    if (!product || !Array.isArray(categories) || categories.length === 0) {
      return 'Unknown Category';
    }
  
    const categoryId = product.categoryId;
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.title : 'Unknown Category';
  };

  const categoryName = getCategoryNameFromProduct(product, categories);
  console.log(categoryName)
 
  const handleAddToCart = () => {  
    if (product) {
      dispatch(addToCart({ ...product, quantity }));  
    }
  };
  

  if (!product) return <p>Product not found.</p>;
  return  (
    <section className={style.container}>
        <BreadCrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'Categories' },
            { path: `/categories/${product.categoryId}`, label: categoryName },
            { path: `/products/${productsId}`, label: product.title, isActive: true }
          ]}
        />
        <div className={styles.productContainer}>
          <div className={styles.productImageContainer}>
            <img src={`${API_URL}${product.image}`} alt={product.title} className={styles.productImage} />
          </div>
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <div className={styles.productPrice}>
              <span className={styles.currentPrice}>${product.discont_price || product.price}</span>
              {product.discont_price && (
                <>
                  <span className={styles.originalPrice}>${product.price}</span>
                  <span className={styles.discountFlag}>
                    -{Math.round(((product.price - product.discont_price) / product.price) * 100)}%
                  </span>
                </>
              )}
            </div>
            <div className={styles.counterAndButton}>
              <Counter quantity={quantity} setQuantity={setQuantity} />
              <RegularButton onClick={handleAddToCart}>Add to cart</RegularButton>
            </div>
            <div className={styles.productDescription}>
              <h3>Description</h3>
              <p 
                className={`${styles.productDescriptionText} ${isExpanded ? styles.expanded : styles.collapsed}`}
              >
                {product.description}
              </p>
              <button 
                className={styles.readMoreButton} 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ display: product.description ? 'block' : 'none' }}
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}
