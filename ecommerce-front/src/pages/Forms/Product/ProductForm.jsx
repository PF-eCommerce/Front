import { Close, Upload } from "@mui/icons-material";
import {
  Box,
  Avatar,
  Button,
  Chip,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../redux/actions/productsAction";
import { config } from "../../../utils/cloudinary/cloudinaryConf";
import { cates } from "../../../utils/data/categories";
import { talles } from "../../../utils/data/sizes";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [tallesOption, setTallesOption] = useState([]);
  const [catesOption, setCatesOption] = useState("");
  const [images, setImages] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      color: [],
      size: [],
      img: [],
    },
  });

  function showUploadWidget() {
    // eslint-disable-next-line no-unused-vars
    let cloudbox = window.cloudinary.openUploadWidget(
      config,
      async (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, result.info.url]);
        }
      }
    );
  }
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
    data.img = images;
    if (data.img !== []) {
      dispatch(createProduct(data));
      navigate("/home");
    }
  };

  const handleCloudy = () => {
    setOpen(!open);
    showUploadWidget();
  };

  const handleDelete = (e) => {
    console.log("SOY EVENTO", e);
    if (images.length) {
      setImages(images.filter((i) => i !== e.target.src));
    }
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container sx={{ p: 2 }}>
          <InputLabel>Título</InputLabel>
          <TextField
            sx={{ my: 1 }}
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
          <InputLabel>Categoría</InputLabel>
          <Select
            sx={{ my: 1 }}
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
          <InputLabel sx={{ my: 1 }}>Imágenes</InputLabel>
          {!images.length ? (
            <Button
              color='secondary'
              variant='outlined'
              onClick={() => handleCloudy(open)}
            >
              Cargar imágenes <Upload mr={2} />
            </Button>
          ) : null}
          <Typography variant='caption' display='block' gutterBottom>
            {images.length
              ? "Puedes eliminar una imagen haciendo click en ella"
              : "Verás las imágenes aquí abajo"}
          </Typography>
          <Box sx={{ my: 1 }}>
            {images.length
              ? images?.map((ima) => (
                  <>
                    {/* <Close
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "darkgoldenrod",
                        p: 1,
                        borderRadius: "50%",
                      }}
                      /> */}
                    <Avatar
                      alt='imaLength'
                      src={ima}
                      onClick={(e) => handleDelete(e)}
                      style={{
                        width: "15%",
                        height: "10%",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    />
                  </>
                ))
              : null}
          </Box>
          {errors.img?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Imagen requerida</p>
          )}
          {errors.img?.type === "minLength" && (
            <p style={{ color: "red", margin: "0.25rem" }}>
              Sube al menos una imagen
            </p>
          )}
          <InputLabel>Descripción</InputLabel>
          <TextField
            sx={{ my: 1 }}
            type='text'
            {...register("desc", { required: true })}
          ></TextField>
          {errors.desc?.type === "required" && (
            <p style={{ color: "red", margin: "0.25rem" }}>Campo requerido</p>
          )}
          <InputLabel>Precio</InputLabel>
          <Input
            sx={{ my: 1 }}
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

          <InputLabel>Tamaño/talle</InputLabel>
          <Select
            sx={{ my: 1 }}
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
          <InputLabel>Stock</InputLabel>
          <Input
            sx={{ my: 1 }}
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
          <InputLabel>Colores</InputLabel>
          <TextField
            sx={{ my: 1 }}
            type='text'
            {...register("color", { required: false })}
          ></TextField>
        </Container>
        <Button type='submit' color='primary' variant='contained'>
          Enviar
        </Button>
      </form>
      <Button
        sx={{ my: 1 }}
        color='primary'
        variant='text'
        onClick={() => navigate("/admin/dashboard")}
      >
        Volver
      </Button>
    </Box>
  );
};

export default ProductForm;
