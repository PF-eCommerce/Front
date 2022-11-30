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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../../../assets/images/Trés_bien__2_-removebg-preview.png";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../redux/actions/productsAction";
import PutModal from "../../../components/PutModal/PutModal";
import { NestedModal } from "../../../components/Modals/ModalToCart";

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

export default function PurchasedCard({ name, price, image, _id, product }) {
  const [expanded, setExpanded] = React.useState(false);
  //Función inspectora de billet----privilegios
  const user = JSON.parse(localStorage.getItem("auth0"));
  const admin = (user) => {
    if (user && user.admin) {
      if (user.admin.includes("admin")) return true;
      else return false;
    } else {
      return false;
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  function modalToCart(e) {
    e.preventDefault();
    dispatch(getProductDetail(product));
  }

  return (
    <Card key={product + _id} sx={{ maxWidth: 300 }}>
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
          name ? (
            name
          ) : (
            <Skeleton
              animation='wave'
              height={10}
              width='80%'
              style={{ marginBottom: 6 }}
            />
          )
        }
      />
      <Link to={`/detail/${product}`}>
        <CardMedia component='img' height='270' image={image} maxWidth='6' />
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
        <IconButton onClick={modalToCart}>
          <NestedModal />
        </IconButton>
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
          <Typography paragraph>Orden: {_id}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
