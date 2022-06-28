import { useSelector } from "react-redux";
import CardCart from "./cardCart";
import './style.css'

function Cart ({setShowCart}) {

    const products = useSelector((state) => state.cart)

    console.log(products)

    return (
        <div className="cartContainer">
            <div className="cartHeader">
                <h3 className="cartTitle">Carrinho</h3>
                <p className="cartClose" onClick={() => setShowCart(false)}>X</p>
            </div>
            <div className="cartContent">
                {products.map((elem, index) => <CardCart key={index} product={elem}/>)}
            </div>
        </div>
    )
}

export default Cart