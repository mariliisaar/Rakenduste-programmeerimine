import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <div className="logo-row">
                <Link to="/">
                    <img className="logo" src="/logo.png" alt="logo" />
                </Link>
                <Link to="/cart">    
                    <img className="cart" src="/cart.svg" alt="cart" />
                </Link>
            </div>
            <div className="nav-row">
                <div className="menu-items">
                    <Link to="/">Esemed</Link>
                    <Link to="/categories">Kategooriad</Link>
                </div>
                <div className="admin">
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;