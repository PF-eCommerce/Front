import { styled } from "@mui/system";
import { InputBase, IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getProductByName} from "../../../redux/actions/productsAction"





const Search = styled("div")(({theme})=>({
    display:"none",
    backgroundColor:"#fafafa",
    padding:"0 20px ",
    borderRadius: theme.shape.borderRadius,
    width: "80%",
    height: "30%",
    marginTop:".5rem",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
       }
    
  
}))

const SearchIcono = styled(SearchOutlinedIcon)(({theme})=>({
    display:"none",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
       }
    
  
}))

const SearchBar = () =>{


    const [input, setInputChange] = useState("");
    const dispatch = useDispatch();

    function handleChangeInput(e) {
        e.preventDefault();
        setInputChange(e.target.value);
        
      }


    function handleSubmit(e){
        e.preventDefault();
        dispatch(getProductByName(input))
        setInputChange("")

    }

    return(
        <>
        
            <Search onKeyDown onClick={handleSubmit}onChange={(e)=> handleChangeInput(e)} ><InputBase placeholder="Search..."/> 
            <IconButton >
            <SearchIcono onClick={(e)=>handleSubmit(e) }color="secondary" sx={{paddingLeft:"rem",marginTop:".5rem"}}  />
            </IconButton>
            </Search>
       
            {/* <Button sx={{marginLeft:".5rem"}} variant="outlined" color="primary" startIcon={
            <SearchOutlinedIcon sx={{paddingLeft:".5rem"}}  />
      }>
       Buscar
      </Button > */}
        </>
    )
}

export default SearchBar
 