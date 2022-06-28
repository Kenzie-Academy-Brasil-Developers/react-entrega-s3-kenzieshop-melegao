import Card from "./container/card";
import './styles.css'
import { useSelector } from "react-redux";

function BodyContainer () {

    const products = useSelector((state) => state.products)

    return (
        <div className="body-container">
            {products.map((elem) => <Card key={elem.id} product={elem}/>)}
        </div>
    )
}

export default BodyContainer
