import './CartWidget.css';
function CartWidget() {
    return(
        <div className="cart">
            <li><a className="icon2" href="/"><img src= {"./shopping-cart.png"} /></a></li>
            <p>0</p>
        </div>
    )
}

export default CartWidget;