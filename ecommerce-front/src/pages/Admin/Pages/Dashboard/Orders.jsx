import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../../../redux/actions/adminAction";

const Container = styled("div")({
  backgroundColor: "white",
  width: "120px",
  height: "100px",
  borderRadius: "3px",
  boxShadow: "0px 0px 1px #424242",
  textDecoration: "none",
  marginLeft: "10px",
});
const Title = styled("p")({
  paddingLeft: "10px",
  paddingTop: "10px",
  fontSize: "15px",
  fontWeight: "bold",
  color: "gray",
});
const UserNum = styled("p")({
  paddingLeft: "10px",
  fontSize: "30px",
  color: "#F44336",
});
const SubTitle = styled("p")({
  paddingLeft: "10px",
  fontSize: "14px",
  textDecoration: "underline",
  color: "#F44336",
});

export default function Users() {
  const info = useSelector((state) => state.admin.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  console.log(info)
  return (
    <Container>
      <Link to={"/admin/orders"}>
        <Title>Ordenes</Title>
        <UserNum>{info ? info.length : 0}</UserNum>
        <SubTitle>Ver todos</SubTitle>
      </Link>
    </Container>
  );
}
