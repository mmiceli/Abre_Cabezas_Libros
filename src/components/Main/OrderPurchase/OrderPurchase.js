
import './OrderPurchase.scss';
import { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Navigate } from 'react-router-dom';
import { addDoc, collection, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore';
import { db } from '../../../firebase/firebase'


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

    const handleSumit = async (event) => {
         event.preventDefault ()

         const purchaseOrder = {
            comprador: values,
            items:cart,
            total:cartTotalCost (),
        }

        //Alertas

        if (values.nombre.length<3) {
            alert ("Nombre incorrecto")
            return //para cortar la funcion
        }

        if (values.email.length<2) {
            alert ("mail incorrecto")
            return
        }

        //bach de escritura para verificar el stock de los items en Firebase vs la cantidad del carrito

        const bach = writeBatch (db)
        const ordenesRef = collection (db, 'Ordenes')
        const productosRef = collection (db, 'Productos')

        const q= query (productosRef, where(documentId(), 'in', cart.map(item=> item.id))) 

        const productos = await getDocs(q) //se obtienen los items de firebase que coinciden con los del carrito.
        console.log (productos)

        const outOfStock = [] //array de comparacion

        productos.docs.forEach ((doc)=> {
            const itemInCart = cart.find (item=> item.id===doc.id) //obtengo los items del carrito

            if (doc.data().stock>=itemInCart.cantidad) {//si estock en Firebase >=cantidad agrego ordenes al bach de escritura.
                bach.update (doc.ref, {
                    stock: doc.data().stock-itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)//Si no tiene stock sufienciente,agrrego una copia al array de control
            }

        })

        if (outOfStock.length===0) {
            bach.commit() //si todo esta ok, envio el bach a Firebase
                .then (()=> {
                    addDoc (ordenesRef, purchaseOrder) //Creo la orden en la bd.  la respuesta devuelve el id
                        .then ((doc) => {
                            //setOrderId (doc.id)
                            finishPurchase (doc.id)
                        })
                })
        }else{
            alert ("Items sin stock")
        }


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
                        <input 
                            name= "telefono"
                            value={values.telefono} 
                            onChange={handleInputChange} 
                            type={'text'} 
                            className='form-control my-2' 
                            placeholder='Telefono'/>
                        <button 
                            className="btn btn-danger orderPurchaseContainer__infPurchase__form__input__button" 
                            type='submit'
                            >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
