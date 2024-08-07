import { useSearchParams, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../../features/api/apiSlice';
import { useEffect, useState } from 'react';

import style from '../../../App.module.css'
import styles from '../ByCategory/ProductsByCategoryPage.module.css'

import useFilteredProducts from '../../../features/useFilteredProducts/useFilteredProducts';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Filter from '../../../components/Filter/Filter';
import SelectSort from '../../../components/SelectSort/SelectSort';
import DiscountedItems from '../../../components/DiscountedItems/DiscountedItems';
import ProductCard from '../../../components/ProductCart/ProductCart';

export default function AllProductsPage() {
  
  const { data } = useGetProductsQuery('/all');
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "default");
  const filteredProducts = useFilteredProducts(products, sortType);
  
  useEffect(() => {
    if (data && data) {
      setProducts(data);
      
      }
    }, [data]);

  return (
    <div className={style.container}>
      
        <BreadCrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'All products', isActive: true }
          ]}
        />
        <div className={styles.categoryPageTitle}>
          <h2>All products</h2>
        </div>
        <div className={styles.filterContainer}>
          <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
          <DiscountedItems searchParams={searchParams} setSearchParams={setSearchParams} />
          <div className={styles.selectSort}>
            <span className={styles.sortTitle}>Sorted</span>
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
      
    </div>
  );
}
