import { useSelector } from "react-redux";
import CardCart from "./cardCart";

function Cart () {

    const products = useSelector((state) => state.cart)

    console.log(products)

    return (
        <div className="cartContainer">
            {products.map((elem, index) => <CardCart key={index} product={elem}/>)}
        </div>
    )
}

export default Cart