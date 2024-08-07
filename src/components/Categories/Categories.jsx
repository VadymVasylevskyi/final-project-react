/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from '../../App.module.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import styles from './Categories.module.css'

export default function Categories({categories = [], amount, header }) {

  const list = categories.slice((0, amount))
  
  return (
    <section className={style.container}>
      {header && (
        <div className={style.titleBlock}>
        <h2>Categories</h2>
        <div className={style.titleBlockLine}></div>
        <Link to="/categories" className={style.titleBlockButton}>
          All categories
        </Link>
      </div>
      )}
        
      <div className={styles.categories}>
                
        {list.map(({id, image, title}) => {
          return (
          <Link to={`/categories/${id}`} key={id}>
            <CategoryCard title={title} imgUrl={image} />
          </Link>)
        })}
      </div>
    </section>
  )
}
