import './Header.scss';
import {Brand} from './Brand/Brand';
import {List} from './Nav/Nav';
import {Cart} from './Cart/Cart';

export const Header = () => {
    return (
        <header>
            <section className="navbar container">
                <Brand/>
                <div className="navbar__centro">
                    <div className="navbar__centro__busqueda">
                        <input className="navbar__centro__busqueda__campo" id="itemBuscado" type="text" placeholder="Buscar por nombre o genero" aria-label="Search"/>
                        <i className="fa-solid fa-magnifying-glass navbar__centro__busqueda__icon" id="buscar"></i>
                    </div>
                    <List/>
                </div>
                <Cart/>
            </section>
        </header>
    )
}