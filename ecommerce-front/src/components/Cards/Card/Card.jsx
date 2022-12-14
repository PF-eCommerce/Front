import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../../../assets/images/Trés_bien__2_-removebg-preview.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import PutModal from "../../PutModal/PutModal";
import Skeleton from "@mui/material/Skeleton";
import { NestedModal } from "../../Modals/ModalToCart";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../redux/actions/productsAction";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../../redux/actions/favoriteAction";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  title,
  desc,
  price,
  img,
  numStock,
  id,
  product,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("auth0"));
  //Función inspectora de billet----privilegios
  const favoritos = JSON.parse(localStorage.getItem("favorite"));
  const admin = (user) => {
    if (user && user.admin) {
      if (user.admin.includes("admin")) return true;
      else return false;
    } else {
      return false;
    }
  };
  const productDet = useSelector((state) => state.product.detail);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleClick = (id) =>{
  //   localStorage.setItem('favorite', JSON.stringify(id))
  // }

  function modalToCart(e) {
    e.preventDefault();
    dispatch(getProductDetail(id));
  }

  function hover(e) {
    e.preventDefault();
    dispatch(getProductDetail(id));
  }
  function addFav(e) {
    e.preventDefault();
    // dispatch(getProductDetail(id))
    dispatch(addToFavorite(productDet));
  }

  function deleteFav(e) {
    e.preventDefault();
    dispatch(deleteFromFavorite(productDet));
  }

  function stockString() {
    if (numStock === 0 || numStock === undefined) {
      return "SIN STOCK";
    }
  }
  function stockTypography() {
    if (numStock === 0 || numStock === undefined) {
      return { backgroundColor: "red", color: "white" };
    }
  }
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardHeader
        avatar={
          logo.length > 0 ? (
            <Avatar src={logo} />
          ) : (
            <Skeleton
              animation='wave'
              variant='circular'
              width={40}
              height={40}
            />
          )
        }
        action={
          admin(user) === true ? (
            <IconButton aria-label='settings'>
              <MoreVertIcon onClick={() => <PutModal product={product} />} />
            </IconButton>
          ) : null
        }
        title={
          title ? (
            title
          ) : (
            <Skeleton
              animation='wave'
              height={10}
              width='80%'
              style={{ marginBottom: 6 }}
            />
          )
        }
        subheader={
          `${numStock}` < 10
            ? "Quedan pocas unidades"
            : // : ((`${numStock}` === 0) || (`${numStock}` === undefined))
              // ? "SIN STOCK"
              // : null
              stockString()
        }
        subheaderTypographyProps={
          `${numStock}` < 10
            ? { backgroundColor: "yellow" }
            : // : ((`${numStock}` === 0) || (`${numStock}` === undefined))
              // ? { backgroundColor: "red" }
              // : null
              stockTypography()
        }
      />
      <Link to={`/detail/${id}`}>
        <CardMedia
          component='img'
          height='280'
          image={Array.isArray(img) ? img[0] : img}
          maxWidth='8'
        />
      </Link>
      <CardContent>
        <Typography variant='h8' color='secondary'>
          {`$ ${
            price ? (
              price
            ) : (
              <Skeleton animation='wave' height={10} width='40%' />
            )
          }`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onMouseOver={hover}>
          {/* {(favoritos?.filter(el=>el._id===id))?.length>0?
            <FavoriteIcon onClick={deleteFav}/>
            :            
            <FavoriteBorderIcon onClick={addFav}/>
          } */}
        </IconButton>
        {/* <Link to={`/detail/${id}`}> */}
        {numStock === 0 || numStock === undefined ? (
          <IconButton>
            <AddShoppingCartOutlinedIcon
              sx={{ marginRight: "1rem" }}
              color='secondary'
              fontSize='large'
            />
          </IconButton>
        ) : (
          <IconButton onClick={modalToCart}>
            <NestedModal />
            {/* <AddShoppingCartOutlinedIcon sx={{ marginRight: "1rem" }} /> */}
          </IconButton>
        )}

        {/* </Link> */}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
