import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartLogo from "../../assets/svg/cart.svg";
import Logo from "../../assets/svg/logo.svg"

import styles from './Header.module.css'
import main from '../../App.module.css'


export default function Header() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
      <header className={main.container}>
        <div className={styles.headerContainer}>
            <Link to='/'>
                <img src={Logo} alt="Pet-Shop Logo" />
            </Link>
            <nav>
                <ul className={styles.navigationBar}>
                    <li>
                        <Link to='/'>Main Page</Link>
                    </li>
                    <li>
                        <Link to='/categories'>Categories</Link>
                    </li>
                    <li>
                        <Link to='/products'>All Products</Link>
                    </li>
                    <li>
                        <Link to='/discounted-products'>All Sales</Link>
                    </li>
                </ul>
            </nav>
            <Link to='/cart' className={styles.cartLogo}><img  src={CartLogo} alt="cart-logo" />
                <span className={styles.count}>{cartItemsCount}</span>
            </Link>

          </div>
          
      </header>
    )
  }