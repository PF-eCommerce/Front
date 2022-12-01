import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getOrderDetails } from '../../../redux/actions/adminAction';
import {updateProduct} from '../../../redux/actions/productsAction';

let id = ''
export default function PostBuy(){
    const dispatch = useDispatch()
    const ordenes = useSelector(state=>state?.admin.orders)
    // const orderDetail = useSelector(state=>state?.admin.orderDetails)
    const [loadingg, setLoadingg] = useState(false)
    let cart = JSON.parse(localStorage.getItem('cart'))
    useEffect(()=>{
        setTimeout( ()=>{
            setLoadingg(true) 
        }, 2000)
        dispatch(getOrders())
        if (loadingg){
            console.log('ORDENESSS', ordenes[ordenes.length-1].status)
            if(ordenes[ordenes.length-1].status==='Pending'){
                // setLoadingg(false)
            }else if(ordenes[ordenes.length-1].status==='Success'||ordenes[ordenes.length-1].status==='approved'){
                cart.forEach(e => {
                    e.size==='XS'&&dispatch(updateProduct(e._id, {size:{
                        // ...size,
                        extraSmall:5}} ))
                    // e.size==='XS'&&dispatch(updateProduct(e._id, {title:'Jordan Chilango1'} ))
                    // e.size==='S'&&dispatch(updateProduct(e._id, size.small-e.qty ))
                    // e.size==='M'&&dispatch(updateProduct(e._id, size.medium:size.medium-e.qty ))
                    // e.size==='L'&&dispatch(updateProduct(e._id, size.large:size.large-e.qty ))
                    // e.size==='XL'&&dispatch(updateProduct(e._id, {"size.extraLarge":"size.extraLarge-e.qty"} ))
                    // e.size==='36'&&dispatch(updateProduct(e._id, size.num36:size.num36-e.qty ))
                    // e.size==='37'&&dispatch(updateProduct(e._id, size.num37:size.num37-e.qty ))
                    // e.size==='38'&&dispatch(updateProduct(e._id, size.num38:size.num38-e.qty ))
                    // e.size==='39'&&dispatch(updateProduct(e._id, size.num39:size.num39-e.qty ))
                    // e.size==='40'&&dispatch(updateProduct(e._id, size.num40:size.num40-e.qty ))
                    // e.size==='41'&&dispatch(updateProduct(e._id, size.num41:size.num41-e.qty ))
                    // e.size==='42'&&dispatch(updateProduct(e._id, size.num42:size.num42-e.qty ))
                    // e.size==='43'&&dispatch(updateProduct(e._id, size.num43:size.num43-e.qty ))
                });
            }
            // setLoadingg(false)
            // id = ordenes[ordenes.length-1]
            // dispatch(getOrderDetails(id))
            // console.log('ORDENDETALLE', orderDetail)
        }
    },[dispatch, loadingg])

    
    
    return(
        <div>
            <p>Deberia llegarle un mail con la confirmacion de compra</p>
        </div>
    )
}