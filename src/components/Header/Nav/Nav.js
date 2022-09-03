
import './Nav.scss';
import { Link } from 'react-router-dom'

export function List () {
  return (
    <nav className='navLocal'>
      <Link to='/libros/infantil'className='navLocal__link' >Infantil</Link>
      <Link to='/libros/novela' className='navLocal__link'>Novela</Link>
      <Link to='/libros/historico' className='navLocal__link'>Historico</Link>
    </nav>
  );
}