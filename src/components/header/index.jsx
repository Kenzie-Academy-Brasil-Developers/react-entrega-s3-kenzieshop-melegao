import "./style.css"
import { useSelector } from "react-redux"

function Header ({setShowCart}) {

    const productCart = useSelector((state) => state.cart)

    return (
        <div className="header">
            <h1 className="logo">Palmeiras Store</h1>
            <div className="header-cart-container">
                <h3 className="header-cart" onClick={() => setShowCart(true)}>Carrinho</h3>
                <p className="header-cart-itens">{productCart.length}</p>
            </div>
        </div>
    )
}

export default Header