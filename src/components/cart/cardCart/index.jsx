import { removeCart } from "../../../store/modules/cart/actions"
import { useDispatch } from 'react-redux'
import './style.css'


function CardCart ({product}) {

    const dispatch = useDispatch()

return (
    <div className="cardCart">
        <img className="imgCart" src={product.image} alt={product.name}/>
        <div className="cardContent">
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            })}</p>
            <button onClick={() => dispatch(removeCart(product))}>Remover</button>
        </div>
    </div>
)
}

export default CardCart