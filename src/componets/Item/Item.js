import './item.css'

const Item = ({product}) => {
    return (
        <div className="item">
            <img alt={product.name} src = {product.image} width="100px" ></img>
            <h2> {product.name} </h2>
            <h3> {product.description} </h3>
            <h3> {product.price} </h3>
        </div>
    );
}; 
export default Item;