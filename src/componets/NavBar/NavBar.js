import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
function NavBar() {
    return(
        <nav> 
            <a className="icon" href="/"> <img src= {"./rabbit.png"} /> </a>
            <div>
                <ul id="navbar">
                    <li><a href="/">Todos los productos</a></li>
                    <li><a href="/">Aros</a></li>
                    <li><a href="/">Pulseras</a></li>
                    <li><a href="/">Anillos</a></li>
                    <li><a href="/">Contacto</a></li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;