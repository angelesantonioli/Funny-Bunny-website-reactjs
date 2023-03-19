import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav> 
            <a className="icon" href="/"> <img src= {"./rabbit.png"} /> </a>
            <div>
                <ul id="navbar">
                    <li><Link className='link' to="/">Todos los productos</Link></li>
                    <li><Link className='link' to="/category/aro">Aros</Link></li>
                    <li><Link className='link' to="/category/pulsera">Pulseras</Link></li>
                    <li><Link className='link' to="/category/anillo">Anillos</Link></li>
                    <li><Link className='link' to="/contacto">Contacto</Link></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;