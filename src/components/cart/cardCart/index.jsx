import { removeCart } from "../../../store/modules/cart/actions"
import { useDispatch } from 'react-redux'


function CardCart ({product}) {

    const dispatch = useDispatch()

return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={() => dispatch(removeCart(product))}>Remover</button>
    </div>
)
}

export default CardCart