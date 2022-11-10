import { styled } from "@mui/system";
import { InputBase, IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';





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
    return(
        <>
            <Search><InputBase placeholder="Search..."/></Search>
            <IconButton>
            <SearchIcono color="secondary" sx={{paddingLeft:"rem",marginTop:".5rem"}}  />
            </IconButton>
            {/* <Button sx={{marginLeft:".5rem"}} variant="outlined" color="primary" startIcon={
            <SearchOutlinedIcon sx={{paddingLeft:".5rem"}}  />
      }>
       Buscar
      </Button > */}
        </>
    )
}

export default SearchBar
 