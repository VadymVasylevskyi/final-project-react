/* eslint-disable react/prop-types */
import { API_URL } from '../../utils'
import styles from './CategoryCard.module.css'


export default function CategoryCard({imgUrl, title}) {
  return (
    
    <div className={styles.categoryCard}>
        <img src={`${API_URL}${imgUrl}`} alt={title} />
        <h3 className={styles.cardTitle}>{title}</h3>
    </div>

  )
}
