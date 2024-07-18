import { Link } from "react-router-dom"

export default function Header() {
    return (
      <header>
          <Link to='/'>Logo</Link>
          <nav>
            <ul>
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
          <Link to='/cart'>Cart</Link>
      </header>
    )
  }