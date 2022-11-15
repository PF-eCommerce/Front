import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import OrdersList from "./Orders/Orders";
import { user } from "../../utils/data/user";

const Profile = (props) => {
  //Datos de user
  //   const [values, setValues] = useState({
  //     firstName: "Katarina",
  //     lastName: "Smith",
  //     email: "katVinC@hotmail.com",
  //     phone: "2563432041",
  //     state: "Alabama",
  //     country: "USA",
  //   });

  //   const handleChange = (event) => {
  //     setValues({
  //       ...values,
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 1,
      }}
    >
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 160,
                mb: 1,
                width: 160,
              }}
            />
            <CardActions>
              <Button color='primary' variant='outlined'>
                Cambiar imagen
              </Button>
            </CardActions>
            <Typography color='textPrimary' gutterBottom variant='h5'>
              {user.name ? user.name : user.userName}
            </Typography>
            {user.name && (
              <Typography color='textPrimary' gutterBottom variant='h8'>
                ({user.userName})
              </Typography>
            )}
            <Typography color='textSecondary' variant='body2'>
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography color='textSecondary' variant='body2'>
              {user.timezone}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <OrdersList />
    </Box>
  );
};

export default Profile;
