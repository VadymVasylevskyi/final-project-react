/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = ({ items }) => {
  return (
    <div className={styles.breadcrumbContainer}>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className={styles.breadcrumbSeparator}></div>
            )}
            {item.isActive ? (
              <span 
                className={`${styles.breadcrumbItem} ${styles.breadcrumbActive}`} 
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className={styles.breadcrumbItem} 
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))
      ) : (
        <span>No breadcrumbs available</span>
      )}
    </div>
  );
};

export default BreadCrumbs;
