import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getOtherPages } from "../../../redux/actions/productsAction";
import { Box } from "@mui/material";

export default function PaginationSize() {
  const products = useSelector((state) => state?.product.products);
  const productsAll = useSelector(state=>state?.product.allProducts)
  const dispatch = useDispatch();

  function handlePage(e) {
    e.preventDefault();
    dispatch(getOtherPages(e.target.innerText));
  }

  if (products?.docs?.length) {
    return (
      <Box my={2} display="flex" justifyContent="center">
        <Stack spacing={2} sx={{ backgroundColor: "#c8f377" }}>
          {/*quise poner las letras blancas pero no encontré bien cómo */}
          <Pagination
            count={products?.totalPages}
            onChange={handlePage}
            variant="text"
            shape="rounded"
            size="large"
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box my={2} display="flex" justifyContent="center">
        <Stack spacing={2} sx={{ backgroundColor: "#c8f377" }}>
          {/*quise poner las letras blancas pero no encontré bien cómo */}
          <Pagination
            count={productsAll?.totalPages}
            onChange={handlePage}
            variant="text"
            shape="rounded"
            size="large"
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </Box>
    )}
}
