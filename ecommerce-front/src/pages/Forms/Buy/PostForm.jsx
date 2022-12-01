import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrders, getOrderDetails } from '../../../redux/actions/adminAction';
import {updateProduct} from '../../../redux/actions/productsAction';
import {deleteFromCart} from "../../../redux/actions/cartAction";

let id = ''
export default function PostBuy(){
    const dispatch = useDispatch()
    const ordenes = useSelector(state=>state?.admin.orders)
    const navigate = useNavigate()
    // const orderDetail = useSelector(state=>state?.admin.orderDetails)
    const [loadingg, setLoadingg] = useState(false)
    let cart = []
    console.log('CARRITO', cart)
    let carrito =[]
    function changeCart(elem){
        carrito = elem.map(e=>{
            if (e.sizee==='XS'){
                return {
                    ...e,
                    size:{
                        ...e.size,
                        extraSmall:e.size.extraSmall-e.qty
                        }
                }}
            else if (e.sizee==='S'){
                return {
                    ...e,
                    size:{
                        ...e.size,
                        small:e.size.small-e.qty
                        }
                }}
                else if (e.sizee==='M'){
                    return {
                        ...e,
                        size:{
                            ...e.size,
                            medium:e.size.medium-e.qty
                            }
                    }}
                    else if (e.sizee==='L'){
                        return {
                            ...e,
                            size:{
                                ...e.size,
                                large:e.size.large-e.qty
                                }
                        }}
                        else if (e.sizee==='XL'){
                            return {
                                ...e,
                                size:{
                                    ...e.size,
                                    extraLarge:e.size.extraLarge-e.qty
                                    }
                            }}
                            else if (e.sizee===36){
                                return {
                                    ...e,
                                    size:{
                                        ...e.size,
                                        num36:e.size.num36-e.qty
                                        }
                                }}
                                else if (e.sizee===37){
                                    return {
                                        ...e,
                                        size:{
                                            ...e.size,
                                            num37:e.size.num37-e.qty
                                            }
                                    }}
                                    else if (e.sizee===38){
                                        return {
                                            ...e,
                                            size:{
                                                ...e.size,
                                                num38:e.size.num38-e.qty
                                                }
                                        }}
                                        else if (e.sizee===39){
                                            return {
                                                ...e,
                                                size:{
                                                    ...e.size,
                                                    num39:e.size.num39-e.qty
                                                    }
                                            }}
                                            else if (e.sizee===40){
                                                return {
                                                    ...e,
                                                    size:{
                                                        ...e.size,
                                                        num40:e.size.num40-e.qty
                                                        }
                                                }}
                                                else if (e.sizee===41){
                                                    return {
                                                        ...e,
                                                        size:{
                                                            ...e.size,
                                                            num41:e.size.num41-e.qty
                                                            }
                                                    }}
                                                    else if (e.sizee===42){
                                                        return {
                                                            ...e,
                                                            size:{
                                                                ...e.size,
                                                                num42:e.size.num42-e.qty
                                                                }
                                                        }}
                                                        else if (e.sizee===43){
                                                            return {
                                                                ...e,
                                                                size:{
                                                                    ...e.size,
                                                                    num43:e.size.num43-e.qty
                                                                    }
                                                            }}              
        })
    }
    
    
    

    useEffect(()=>{
        setTimeout( ()=>{
            setLoadingg(true) 
        }, 2000)
        dispatch(getOrders())
        if (loadingg){
            // console.log('ORDENESSS', ordenes[ordenes.length-1].status)
            if(ordenes[ordenes.length-1].status==='Pending'){
                setLoadingg(false)
            }else if(ordenes[ordenes.length-1].status==='Success'||ordenes[ordenes.length-1].status==='approved'){
                cart = JSON.parse(localStorage.getItem('cart'))
                changeCart(cart)
                
                carrito.forEach(e => {
                    const stocks = [e.size.extraSmall, e.size.small, e.size.medium, e.size.large, e.size.extraLarge, e.size.num36, e.size.num37, e.size.num38, e.size.num39,e.size.num40,e.size.num41,e.size.num42,e.size.num43]
                    
                    let suma = 0
                    for (let i = 0; i<stocks.length; i++){
                        if(stocks[i]>0){suma = suma+stocks[i]}
                    }
                    
                    dispatch(updateProduct(e._id, ({size:e.size},{numStock:suma}) ))
                    dispatch(deleteFromCart(e))
                });
                navigate('/')
            }
            
        }
    },[dispatch, loadingg])

    
    
    return(
        <div>
            <p>Deberia llegarle un mail con la confirmacion de compra</p>
        </div>
    )
}