import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import PaginationSize from "../../components/Cards/Pagination/Pagination";
import FilterSide from "../../components/Filters/filtros/FilterSide";
import { getAllProductsNoPaginate } from '../../redux/actions/productsAction'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProductsNoPaginate())
  },[])


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
