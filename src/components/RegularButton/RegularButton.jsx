
import styles from './RegularButton.module.css';

function RegularButton(props) {
  const { children, isActive, ...otherProps } = props;
  const buttonClass = isActive ? `${styles.button} ${styles.active}` : `${styles.button} ${styles.inactive}`;

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
}

export default RegularButton;
