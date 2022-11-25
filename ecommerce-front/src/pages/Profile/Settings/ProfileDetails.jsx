import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  // argentinaProvincias,
  argentinaDeptos,
} from "../../../utils/data/argentina";
import { updateUserData } from "../../../redux/actions/userAction";

// const datosArgentina = (provincia) => {
//   if (provincia) {
//     return argentinaDeptos.includes(provincia);
//   }
// };

const ProfileDetails = (user) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    city: user.city,
    phone: user.phone,
    country: user.country,
  });
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (data) => {
    if (data !== values) {
      dispatch(updateUserData(data));
      alert("Cambios guardados");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
      <Card>
        <CardHeader
          subheader='Proceda a modificar o completar su información'
          title='Perfil'
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Indíquenos sus nombres'
                label='Nombres'
                {...register("name")}
                onChange={handleChange}
                required
                value={values.name}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Apellidos'
                {...register("lastName")}
                onChange={handleChange}
                required
                value={values.lastName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Dirección de Correo Electrónico'
                {...register("email")}
                onChange={handleChange}
                required
                value={values.email}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Núm. Telefónico'
                {...register("phone")}
                onChange={handleChange}
                type='number'
                value={values.phone}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='País'
                {...register("country")}
                onChange={handleChange}
                required
                value={values.country}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Estado/Ciudad'
                {...register("city")}
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.city}
                variant='outlined'
              >
                {argentinaDeptos.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <Button type='submit' color='primary' variant='contained'>
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
export default ProfileDetails;
