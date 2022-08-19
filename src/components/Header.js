export const Header = () => {
    return (
        <header>
            <section className="navbar container">
                <div className="navbar__logo">
                    <picture className="navbar__logo__img">
                        <a href="index.html"><i class="fa-solid fa-book"></i></a>
                    </picture> 
                    <p classname="navbar__logo__text">Abre Cabezas Libros</p>
                </div>
                <div className="navbar__busqueda">
                    <div className="navbar__busqueda__local">
                        <input className="navbar__busqueda__local__campo" id="itemBuscado" type="text" placeholder="Buscar por nombre o genero" aria-label="Search"/>
                        <i className="fa-solid fa-magnifying-glass navbar__busqueda__local__buscar" id="buscar"></i>
                    </div>
                    <ul className="navbar__busqueda__item">
                        <li className="navbar__busqueda__item__varios">Mas vendidos</li>
                        <li className="navbar__busqueda__item__varios">Para niños</li>
                    </ul>
                </div>
                <div className="navbar__carrito">
                    <p className="cantItem">0</p>
                    <picture id="ver" className="navbar__carrito__img">
                        <i className="fa-solid fa-cart-arrow-down"></i> 
                    </picture>
                </div>
            </section>
        </header>
    )
}