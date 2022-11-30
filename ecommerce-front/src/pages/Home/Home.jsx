import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import PaginationSize from "../../components/Cards/Pagination/Pagination";
import FilterSide from "../../components/Filters/filtros/FilterSide";
import {getAllProductsNoPaginate} from "../../redux/actions/productsAction"

const Home = () => {


  const allproducts = useSelector(state=>state.product.allProductsNoLimit)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProductsNoPaginate())
  },[])

  console.log("desde home allproductsinpaginate", allproducts)
  return (
    <div>
      <PaginationSize />
      <Stack direction="row" spacing={1}>
        <FilterSide />
        <Cards />
      </Stack>
      <PaginationSize />
    </div>
  );
};

export default Home;
