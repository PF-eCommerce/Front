import {
  Box,
  Button,
  Chip,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../redux/actions/productsAction";
import useUploadWidget from "../../../utils/cloudinary/useUploadWidget";
import { cates } from "../../../utils/data/categories";
import { talles } from "../../../utils/data/sizes";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cloudy = useUploadWidget();
  const [open, setOpen] = useState(false);
  const [tallesOption, setTallesOption] = React.useState([]);
  const [catesOption, setCatesOption] = React.useState("");
  const [images, setImages] = useState([""]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      color: [],
      size: [],
    },
  });

  const handleTalle = (event) => {
    const {
      target: { value },
    } = event;
    setTallesOption(typeof value === "string" ? value.split(",") : value);
  };
  const handleCate = (event) => {
    const {
      target: { value },
    } = event;
    setCatesOption(typeof value === "string" ? value.split(",") : value);
  };
  const onSubmit = (data) => {
    console.table(data);
    dispatch(createProduct(data));
    navigate("/home");
  };

  const handleCloudy = () => {
    setOpen(!open);
    setImages(cloudy);
  };

  return (
    <Box my={2} display='flex' justifyContent='center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>
          Título
          <TextField
            {...register("title", { required: true, minLength: 4 })}
          ></TextField>
          {errors.title?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              El campo es requerido
            </p>
          )}
          {errors.title?.type === "minLength" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              El título tiene que tener 4 caracteres mínimamente
            </p>
          )}
        </InputLabel>
        <InputLabel>
          Categoría
          <Select
            id='cateSelect'
            {...register("category", { required: true, minLength: 1 })}
            value={catesOption}
            onChange={handleCate}
          >
            {cates.map((cate) => (
              <MenuItem key={cate.valor} value={cate.valor}>
                {cate.nombre}
              </MenuItem>
            ))}
          </Select>
          {errors.category?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              Categoría requerida
            </p>
          )}
          {errors.category?.type === "minLength" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              Elige una categoría
            </p>
          )}
        </InputLabel>
        <InputLabel {...register("images")}>
          Imágenes
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => handleCloudy()}
          >
            Elegir
          </Button>
          {images ? images?.map((ima) => <img src={ima} alt='' />) : null}
          {/* {errors.images?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Imagen requerida</p>
          )} */}
        </InputLabel>
        <InputLabel>
          Descripción
          <TextField
            type='text'
            {...register("desc", { required: true })}
          ></TextField>
          {errors.desc?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Campo requerido</p>
          )}
        </InputLabel>
        <InputLabel>
          Precio
          <Input
            type='number'
            {...register("price", { required: true, min: 0 })}
          ></Input>
          {errors.price?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Precio requerido</p>
          )}
          {errors.price?.type === "min" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              El precio debe ser mayor a 0. No queremos pérdidas
            </p>
          )}
        </InputLabel>
        <InputLabel>
          Stock
          <Input
            type='number'
            {...register("numStock", { required: true, min: 1 })}
          ></Input>
          {errors.numStock?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Stock requerido</p>
          )}
          {errors.numStock?.type === "min" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              El stock debería ser mayor a 1, de otra forma, sería raro.
            </p>
          )}
        </InputLabel>
        <InputLabel>
          Tamaño/talle
          <Select
            id='talleSelect'
            {...register("size", { required: true, minLength: 1 })}
            multiple
            value={tallesOption}
            onChange={handleTalle}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {talles.map((talle) => (
              <MenuItem key={talle} value={talle}>
                {talle}
              </MenuItem>
            ))}
          </Select>
          {errors.size?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Talle requerido</p>
          )}
          {errors.size?.type === "min" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              Selecciona al menos un talle
            </p>
          )}
        </InputLabel>
        <InputLabel>
          Colores
          {/* <input
            type='color'
            {...register("color", { required: false })}
          ></input> */}
          <TextField
            type='text'
            {...register("color", { required: false })}
          ></TextField>
        </InputLabel>
        <Button type='submit' color='primary' variant='outlined'>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;


