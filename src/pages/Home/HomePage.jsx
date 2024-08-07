import { useSelector } from "react-redux"

import Categories from "../../components/Categories/Categories"
import Sales from "../../components/Sales/Sales"
import CheckOut from "../../components/CheckOut/CheckOut"
import GetDiscountForm from "../../components/GetDiscountForm/GetDiscountForm"



export default function HomePage() {
  const {products, categories} = useSelector((state) => state)
  
  
  return (
    <>
      <CheckOut />
      <Categories categories={categories.list} amount={4} header={true}/>
      <GetDiscountForm />
      <Sales products={products.list} amount={4} title={true} />
    </>
  )
}
