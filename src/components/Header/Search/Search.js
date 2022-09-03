
import './Search.scss';

export function Search () {
  return (
    <div className="busqueda">
        <input className="busqueda__campo" id="itemBuscado" type="text" placeholder="Buscar por nombre o genero" aria-label="Search"/>
        <i className="fa-solid fa-magnifying-glass busqueda__icon" id="buscar"></i>
    </div>
  );
}

