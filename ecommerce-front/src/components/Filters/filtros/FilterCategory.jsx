import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cates } from "../../../utils/data/categories";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../redux/actions/productsAction";

export default function SelectVariants() {
  const [category, setCategory] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setCategory(dispatch(getCategories(value)));
  };

  const categorias = cates.sort((a,b)=>{
    if (a.nombre>b.nombre) return 1
    if (b.nombre>a.nombre) return -1
    return 0
  })

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>
          Categoria
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={category}
          onChange={(e) => handleChange(e)}
          label='Categoria'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {categorias?.map((categoria) => {
            return (
              <MenuItem value={categoria.valor}>{categoria.valor}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
