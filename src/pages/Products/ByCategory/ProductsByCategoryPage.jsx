import styles from './ProductsByCategoryPage.module.css'
import style from '../../../App.module.css'

import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetCategoryQuery } from '../../../features/api/apiSlice';
import { Link } from 'react-router-dom';

import useFilteredProducts from '../../../features/useFilteredProducts/useFilteredProducts';
import Filter from '../../../components/Filter/Filter';
import DiscountedItems from '../../../components/DiscountedItems/DiscountedItems';
import SelectSort from '../../../components/SelectSort/SelectSort';
import ProductCard from '../../../components/ProductCart/ProductCart';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';



const ProductsByCategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "default");
  const [categoryName, setCategoryName] = useState("");
  const { data } = useGetCategoryQuery({ categoryId });
  const filteredProducts = useFilteredProducts(products, sortType);

useEffect(() => {
  if (data && data.data) {
    setProducts(data.data);
    setCategoryName(data.category.title)
    }
  }, [data]);


  return (
    <div className={style.container}>
      
        <BreadCrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'Categories' },
            { path: `/categories/${categoryId}`, label: categoryName, isActive: true }
          ]}
        />
        <div className={styles.categoryPageTitle}>
          <h2>{categoryName}</h2>
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



export default ProductsByCategoryPage;
