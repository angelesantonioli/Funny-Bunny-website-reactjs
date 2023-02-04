import './NavBar.css';
import CartWidget from './CartWidget';
function NavBar() {
    return(
        <nav> 
            <a className="icon" href="/"> <img src= {"./rabbit.png"} /> </a>
            <div>
                <ul id="navbar">
                    <li><a href="/">Ingresos de hoy</a></li>
                    <li><a href="/">Mujer</a></li>
                    <li><a href="/">Hombre</a></li>
                    <li><a href="/">Accesorios</a></li>
                    <li><a href="/">Contacto</a></li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;