import { useNavigate } from "react-router-dom"
import style from "../../App.module.css"
import RegularButton from "../RegularButton/RegularButton"
import styles from "./CheckOut.module.css"

export default function CheckOut() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/discounted-products');
  };
  return (
    <section className={style.container}>
        <div className={styles.checkoutContent}>
          <h1>Amazing Discounts <br/> on Pets Products!</h1>
          
            <RegularButton onClick={handleClick}>Check out</RegularButton>
          
        </div>

    </section>
  )
}
