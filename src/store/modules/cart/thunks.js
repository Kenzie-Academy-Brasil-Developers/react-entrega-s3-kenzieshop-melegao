import { addCart } from "./actions";
import { v4 as uuidv4 } from 'uuid';

const addCartThunk = (product) => {
    return (dispatch) => {
        const newProduct = product;
        const changedProduct = {
            image: newProduct.image,
            price: newProduct.price,
            name: newProduct.name,
            id: uuidv4()
        }
    
        dispatch(addCart(changedProduct))
    }
}

export default addCartThunk