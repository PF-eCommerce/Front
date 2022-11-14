import { Stack } from "@mui/material";
import React from "react";
import Cards from "../../components/Cards/Cards";
import PaginationSize from "../../components/Cards/Pagination/Pagination";
import FilterSide from "../../components/Filters/filtros/FilterSide";

const Home = () => {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <FilterSide/>
          <Cards />
         
      </Stack>
        <PaginationSize />
    
    </div>
  );
};

export default Home;
