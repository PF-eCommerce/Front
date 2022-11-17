import { BOX } from "@mui/material"
import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"






const ShoppingCart = () => {


    const cartItems = useSelector(state=>state.cart.cart)




        return (
            <div>
                {
                    cartItems?.map(item=>{
                        return (
                            <ProductItem
                            name={item.title}
                            id={item._id}
                            image={item.img[0]}/>
                        )
                    })
                }
              
            </div>
        )
}


export default ShoppingCart