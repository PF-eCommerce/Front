import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import PaginationSize from "../../components/Cards/Pagination/Pagination";
import FilterSide from "../../components/Filters/filtros/FilterSide";

const Home = () => {
  const products = useSelector(state => state.product.products)
  return (
    <div>
      {products?.docs?.length > 0 && <PaginationSize />}
      <Stack direction="row" spacing={1}>
        <FilterSide />
        <Cards />
      </Stack>
      {products?.docs?.length > 0 && <PaginationSize />}
    </div>
  );
};

export default Home;
