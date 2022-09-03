import './ItemCount.scss';
import { useState } from "react";

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState (0) //Estado, gral se usa setXXX. const [variable, fn] = useState (valor de variable)

    const handleSumar = () => {
        if (counter<stock) {
            setCounter (counter+1) //Modifico un estado. Al modificar el estado cambio la variable.
        } 
    }

    const handleRestar = () => {
        if (counter>0) {
            setCounter (counter-1)
        }
    }


    //useEffect (fn, array de dependencia)
    //useEffect (()=> {console.log ("Sole")}, []) //de esta forma solo se monta una sola vez
    //useEffect (()=> {console.log ("Sole")}, [counter]) //de esta forma se monta cada vez que se actualice counter

    return (
        <div className='buttonAddCart'>
            <div className="my-2">
                <button onClick={handleRestar} className="btn btn-outline-danger">-</button>
                <span className="mx-2">{counter}</span>
                <button onClick={handleSumar} className="btn btn-outline-danger">+</button>
            </div>
            <div className="buttonAddCart__button">
                <button className="btn btn-danger buttonAddCart__button__item">Comprar ahora</button>
                <button className="btn btn-outline-danger buttonAddCart__button__item">Agregar al carrito</button>
            </div>
        </div>
    )
}