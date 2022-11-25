import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Modal from "@mui/material/Modal";
import {
  Chip,
  FormControl,
  FormHelperText,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { cates } from "../../utils/data/categories";
import { Box } from "@mui/system";
import { talles } from "../../utils/data/sizes";
import {
  deleteProduct,
  updateProduct,
} from "../../redux/actions/productsAction";

export default function PutModal({ product }) {
  const dispatch = useDispatch();
  function f5() {
    return window.location.reload();
  }
  const [tallesOption, setTallesOption] = React.useState([]);
  const [catesOption, setCatesOption] = React.useState("");
  const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

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

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id));
    handleClose();
    alert("Producto eliminado correctamente");
    f5();
  };
  const onSubmit = (data) => {
    if (data !== []) {
      dispatch(updateProduct(product._id, data));
      handleClose();
      alert("Se modificó correctamente");
      f5();
    }
  };
  return (
    <div>
      {/* <Button variant='contained' onClick={handleOpen}></Button> */}
      <Modal open={open} onClose={handleClose}>
        <Box>
          <DialogContent>
            <DialogContentText>Editando {product.title}</DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
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
                <FormHelperText id='name-text-helper'>
                  El nombre tiene que tener más de 5 letras.
                </FormHelperText>
              </FormControl>
              <FormControl>
                Precio
                <Input
                  type='number'
                  {...register("price", { required: true, min: 0 })}
                ></Input>
                {errors.price?.type === "required" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    Precio requerido
                  </p>
                )}
                {errors.price?.type === "min" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    El precio debe ser mayor a 0. No queremos pérdidas
                  </p>
                )}
                <FormHelperText id='price-text-helper'>
                  Precio mayor a 0.
                </FormHelperText>
              </FormControl>
              <FormControl>
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
                <FormHelperText id='desc-text-helper'>
                  Debe elegirse al menos una categoría
                </FormHelperText>
              </FormControl>
              <FormControl>
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
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    Talle requerido
                  </p>
                )}
                {errors.size?.type === "min" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    Selecciona al menos un talle
                  </p>
                )}
              </FormControl>
              <FormControl>
                Descripción
                <TextField
                  type='text'
                  {...register("desc", { required: true })}
                ></TextField>
                {errors.desc?.type === "required" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    Campo requerido
                  </p>
                )}
                <FormHelperText id='obs-text-helper'>
                  Descripción requerida
                </FormHelperText>
              </FormControl>
              <FormControl>
                Stock
                <Input
                  type='number'
                  {...register("numStock", { required: true, min: 0 })}
                ></Input>
                {errors.numStock?.type === "required" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    Stock requerido
                  </p>
                )}
                {errors.numStock?.type === "min" && (
                  <p style={{ color: "red", margin: "0.25rem" }}>
                    El stock debería ser mayor o igual a 0, de otra forma, sería
                    raro.
                  </p>
                )}
                <FormHelperText id='stock-text-helper'>
                  Stock mayor o igual 0.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <TextField
                  type='text'
                  {...register("color", { required: false })}
                ></TextField>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type='submit' color='primary' variant='outlined'>
              Aplicar
            </Button>
            <Button onClick={(e) => handleDelete(e)}>ELIMINAR</Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
