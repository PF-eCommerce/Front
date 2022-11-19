import { Box,Typography,Button} from "@mui/material"
import { useSelector } from "react-redux"
import TableProducts from "./TableProducts"
import {  useNavigate } from 'react-router-dom';






const ShoppingCart = ({history }) => {

    let navigate = useNavigate();
    const cartItems = useSelector(state=>state.cart.cart)



    const handleGoBackBtn = () => {
		navigate(-1);
	};

        return (
            <div>
                {cartItems.length <= 0 ? (
                    <Box bgcolor={"white"}  minHeight={300} justifyContent="center" padding={4} >
                        <Typography variant="h3" color="#927960">No has Agregado Articulos</Typography>
                        <Button
                              onClick={handleGoBackBtn}
                              sx={{backgroundColor: "#7B5B3E",
                              color: "white",
                              fontSize: 15, "&:hover": {
                              backgroundColor: "#927960",
                                 }
                             
                              }}>Volver
                         </Button>    
                     </Box>         
                                 
         ):(
                    <TableProducts />
                )}
              
                {/* {
                    cartItems?.map(item=>{
                        return (
                        <Box >
                          <Stack direction="row" spacing={3} justifyContent="space-between">
                            <ProductItem
                            name={item.title}
                            id={item._id}
                            image={item.img[0]}
                            price={item.price}/>
                          </Stack>
                        </Box>
                        )
                    })
                } */}
              
            </div>
        )
}


export default ShoppingCart