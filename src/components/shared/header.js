import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
    <header>
        <nav>
            <ul className="navigation">
                <li><Link to="/" className="text-white ">Catalogo de Peliculas</Link></li>
                <li><Link to="/" className="text-white">Recientes</Link></li>
                <li><Link to="/favorites" className="text-white">favoritos</Link></li>
            </ul>
        </nav>
    </header>
     );
}
 
export default Header;