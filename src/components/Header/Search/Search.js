
import './Search.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';


export function Search () {

  const [search, setSearch] = useState('')

  console.log (search)

  return (
    <div className="busqueda">
        <input onChange={event => setSearch(event.target.value)} className="busqueda__campo" type="text" placeholder="Buscar por nombre" aria-label="Search"/>
        <Link to={`/busqueda/${search}`} className="fa-solid fa-magnifying-glass busqueda__icon"/>
    </div>
  );
}

