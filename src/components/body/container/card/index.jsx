import './style.css'
import { useDispatch } from 'react-redux'
import addCartThunk from '../../../../store/modules/cart/thunks'

function Card ({product}) {


    const dispatch = useDispatch()

    return (
        <div className='card-container'>
            <img src={product.image} alt="" className='product-img'/>
            <h3 className='name-product'>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={() => dispatch(addCartThunk(product))}>Comprar</button>
        </div>
    )
}

export default Card