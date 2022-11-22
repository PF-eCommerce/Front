import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import s from "./CartNavBar.module.css";
import carrito from "../../image/carrito.png";

export const CartNavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { cart } = useSelector((state) => state.cart);

  if (user?.admin === false) {
    return (
      <div >
        
          <div className={s.divCart}>
            <div>
              <span className={s.spanCart}> {cart.length} </span>
            </div>
            <div>
              <img
                className={s.imgCarrito}
                src={carrito}
                alt="image not found"
              />
            </div>
          </div>

      </div>
    );
  } else {
    null;
  }
};

export default CartNavBar;
