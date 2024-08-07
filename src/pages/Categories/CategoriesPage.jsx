import { useSelector } from "react-redux"
import styles from '../Products/ByCategory/ProductsByCategoryPage.module.css'
import style from '../../App.module.css'
import Categories from "../../components/Categories/Categories"
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"

export default function CategoriesPage() {

  const list = useSelector((state) => state.categories.list)
  return (
    <>
    <div className={style.container}>
        <BreadCrumbs
              items={[
                { path: '/', label: 'Main page' },
                { path: '/categories', label: 'Categories', isActive: true }
              ]}
            />

            <div className={styles.categoryPageTitle}>
              <h2>Categories</h2>
            </div>
        <Categories categories={list} />
      </div>
    </>
  )
}
