
import './OrderPurchase.scss';
import { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Navigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase'

//min 

export const OrderPurchase = () => {

    const {cart, cartTotalCost, finishPurchase, cartTotalQuantity} = useContext (CartContext)

    const [values, setValues]= useState ({
        nombre:'',
        email:'',
        direccion:''
    })  

    const handleInputChange = (event) => {

        setValues ({ // hace setValues con el estado anterior y modifica la propiedad nombre que es el dato que ingreso en el input.
            ...values, //spread de values. 
            [event.target.name]: event.target.value
        })

    }

    const handleSumit = (event) => {
         event.preventDefault ()

         const purchaseOrder = {
            comprador: values,
            items:cart,
            total:cartTotalCost (),
        }

        if (values.nombre.length<3) {
            alert ("Nombre incorrecto")
            return //para cortar la funcion
        }

        if (values.email.length<2) {
            alert ("mail incorrecto")
            return
        }

        const ordenesRef = collection (db, 'Ordenes')

        addDoc (ordenesRef, purchaseOrder) //Creo la orden en la bd.  la respuesta devuelve el id
            .then ((doc) => {
                finishPurchase (doc.id)
            })
    }

    if (cart.length===0) {
        return <Navigate to='/'/>
    }

    return (
        <div className='orderPurchaseContainer container'>
            <h4 className = "orderPurchaseContainer__titule" >Informacion de compra </h4>
            <div className = "orderPurchaseContainer__infPurchase">
                <div className = "orderPurchaseContainer__infPurchase__resumen">
                    <h6 className = "my-2" >Resumen de compra </h6>
                    <p className = "my-2">Cantidad: {cartTotalQuantity ()} libros</p>
                    <p className = "my-2">Pagas: {cartTotalCost ()}$</p>
                </div>
                <div className = "orderPurchaseContainer__infPurchase__form">
                    <h6 className = "" >Datos de compra </h6>
                    <form className = "orderPurchaseContainer__infPurchase__form__input my-2" onSubmit={handleSumit}>
                        <input 
                            name= "nombre"
                            value={values.nombre} 
                            onChange={handleInputChange}  
                            type={'text'} 
                            className='form-control my-2' 
                            placeholder='Nombre'/>
                        <input 
                            name= "email"
                            value={values.email} 
                            onChange={handleInputChange}  
                            type={'email'} 
                            className='form-control my-2' 
                            placeholder='E-mail'/>
                        <input 
                            name= "direccion"
                            value={values.direccion} 
                            onChange={handleInputChange} 
                            type={'text'} 
                            className='form-control my-2' 
                            placeholder='Direccion'/>
                        <button className="btn btn-danger orderPurchaseContainer__infPurchase__form__input__button" type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
