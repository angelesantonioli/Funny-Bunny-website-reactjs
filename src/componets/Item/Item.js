import './item.css'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="item">
            <img alt={product.title} src={`./img/${product.image}`} width="100px" ></img>
            <h2> {product.title} </h2>
            <h3> {product.description} </h3>
            <h3> {product.price} USD </h3>
            <Link to={`/item/${product.id}`} >
                <button>Ver detalles</button>
            </Link>
        </div>
    );
};
export default Item;