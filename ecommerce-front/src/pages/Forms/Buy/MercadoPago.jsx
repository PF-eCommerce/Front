import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImageButton } from "../../../components/Styled/StyledButtons";
import { orderProduct } from "../../../redux/actions/productsAction";

export const MercadoPago = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.cart)
    const productArray = cartItems.map(el=>{
        return{
          name: el.title,
          count: el.qty,
          image: el.img&&el.img[0],
          price: el.price,
          _id: el._id
        }
      })
    function linkMP(e){
        e.preventDefault()
        let id = JSON.parse(localStorage.getItem('auth0'))._id
        let location = JSON.parse(localStorage.getItem('location'))
        let input = JSON.parse(localStorage.getItem('input'))
        dispatch(orderProduct(productArray, id, location, input, navigate))
      }

    return (
                <ImageButton
                        name="MercadoPago"
                        onClick={linkMP}
                        style={{
                          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUb3s6MFqaj8sB3k4bBzVaiR9exgjoKY1DQ&usqp=CAU)`,
                          height: "150px",
                          width: "65%",
                          borderRadius: "25px",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        }}
                        />
    )
}