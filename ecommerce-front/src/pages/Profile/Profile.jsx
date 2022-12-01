import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { config } from "../../utils/cloudinary/cloudinaryConf";
import OrdersList from "./Orders/Orders";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ReviewsList from "./Reviews/ReviewsList";
import ProfileDetails from "./Settings/ProfileDetails";
import LastPurchases from "./Purchased/LastPurchases";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserData, updateUserData } from "../../redux/actions/userAction";
import {
  getOrdersByUser,
  getUsersPurchasedProducts,
} from "../../redux/actions/ordersAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  console.log(id)
  useEffect(() => {
    dispatch(getUserData(id));
    dispatch(getOrdersByUser(id));
    dispatch(getUsersPurchasedProducts(id));
  }, [dispatch, id]);

  function showUploadWidget() {
    // eslint-disable-next-line no-unused-vars
    let cloudbox = window.cloudinary.openUploadWidget(
      config,
      async (error, result) => {
        if (!error && result && result.event === "success") {
          setAvatar(result.info.url);
        }
      }
    );
  }

  const handleCloudy = (e) => {
    e.preventDefault();
    setOpen(!open);
    showUploadWidget();
  };
  const handleSubmit = (avatar) => {
    if (avatar !== "") {
      dispatch(updateUserData({ image: avatar })).then(setAvatar(""));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 1,
      }}
    >
      <Card sx={{ maxHeight: "40%" }}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={user?.image ? user.image : avatar}
              sx={{
                height: 160,
                mb: 1,
                width: 160,
              }}
            />
            <CardActions>
              {avatar === "" ? (
                <Button
                  onClick={(e) => handleCloudy(open)}
                  color='primary'
                  variant='outlined'
                >
                  Cambiar imagen
                </Button>
              ) : (
                <>
                  <button type='submit' onClick={() => handleSubmit()}>
                    Guardar
                  </button>
                  <button onClick={setAvatar("")}>Cancelar</button>
                </>
              )}
            </CardActions>
            <Typography color='textPrimary' gutterBottom variant='h5'>
              {user?.name ? user?.name : user?.userName}
            </Typography>
            {user?.name && (
              <Typography color='textPrimary' gutterBottom variant='h8'>
                ({user?.userName})
              </Typography>
            )}

            <Typography color='textSecondary' variant='body2'>
              {user?.city ? `${user?.city}` : null}
              {user?.country ? ` ${user?.country}` : null}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ ml: 2, width: { xs: "100%", sm: "80%" } }}>
        <Accordion color='primary' key='acordPurch'>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Últimas compras</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <LastPurchases />
          </AccordionDetails>
        </Accordion>
        <Accordion key='acordReviews'>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Opiniones hechas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReviewsList />
          </AccordionDetails>
        </Accordion>
        <Accordion key='acordOrders'>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Órdenes de compra</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <OrdersList />
          </AccordionDetails>
        </Accordion>
        {/* <Accordion key='acordOptions'>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Info. adicional</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProfileDetails user={user} />
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Box>
  );
};

export default Profile;
