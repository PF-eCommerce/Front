import React from 'react'
import Maps from '../../components/Maps/Maps'
import s from './Sucursales.module.css'

const Sucursales = () => {
  return (
    <div className={s.sucursalContain} >
        <h1>Sucursales</h1>
        <div>
            <h2>Sucursal Corrientes:</h2>
            <p>Av. Costanera Juan Pablo II, Corrientes, Argentina</p>
            <Maps />
        </div>
    </div>
  )
}

export default Sucursales