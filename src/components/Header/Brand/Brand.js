import './Brand.scss';
import { Link } from 'react-router-dom'

export const Brand = () => {
    return (
        <div className="logo">
            <picture className="logo__img">
                <Link to="/"><i className="fa-solid fa-book logo__img__libro"></i></Link>
            </picture> 
            <p className="logo__text">Abre Cabezas Libros</p>
        </div>
    )
}


