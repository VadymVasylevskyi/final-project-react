
import { useSearchParams, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../../features/api/apiSlice';
import { useEffect, useState } from 'react';

import style from '../../../App.module.css'
import styles from '../ByCategory/ProductsByCategoryPage.module.css'

import useFilteredProducts from '../../../features/useFilteredProducts/useFilteredProducts';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Filter from '../../../components/Filter/Filter';
import SelectSort from '../../../components/SelectSort/SelectSort';
// import DiscountedItems from '../../../components/DiscountedItems/DiscountedItems';
// import ProductCard from '../../../components/ProductCart/ProductCart';
import ProductCard from "../../../components/ProductCart/ProductCart";


export default function DiscountedProductsPage() {
   
    const { data } = useGetProductsQuery('/all');
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortType, setSortType] = useState(searchParams.get("sortType") || "default");
    const discountedProducts = products.filter(product => product.discont_price);
    const filteredProducts = useFilteredProducts(discountedProducts, sortType);
    
    useEffect(() => {
      if (data && data) {
        setProducts(data);
        
        }
      }, [data]);
 
     


  return (
    <>
    <div className={style.container}>
    <BreadCrumbs
    items={[
      { path: '/', label: 'Main page' },
      { path: '/categories', label: 'Discounted items', isActive: true }
    ]}
  />
  <div className={styles.categoryPageTitle}>
          <h2>Discounted products</h2>
        </div>
  <div className={styles.filterContainer}>
    <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
    <div className={styles.selectSort}>
      <span className={styles.sortTitle}>Sorted by</span>
      <SelectSort sortType={sortType} setSortType={setSortType} searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  </div>
  <div className={styles.productsContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to ={`/products/${product.id}`} key={product.id}>
              <ProductCard
                            product={product}
                        />
              </Link>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>

  {/* <div className={styles.productsContainer}>
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <Link to ={`/products/{id}`} key={product.id}></Link>
        <Sales products={filteredProducts}  overlay={true}/>
        </Link>
      ))
    ) : (
      <p>No discounted products found</p>
    )}
    </div> */}
  </div>


</>
    
  )
}
