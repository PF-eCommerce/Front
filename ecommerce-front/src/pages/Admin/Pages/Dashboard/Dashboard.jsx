import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chart from "../../Components/Chart/Chart";
import { Presupuesto } from "../../Components/Presupuesto";
import VentasTotales from "../../Components/VentasTotales/VentasTotales";
import Orders from "./Orders";
import Users from "./Users";

const Container = styled(Box)({
  marginLeft: "20px",
  display: "flex",
});

export default function Dashboard() {
  return (
    <Container>
      <Presupuesto />
      <Users />
      <Orders />
      <Chart title='Últimos 3 meses (ingresos)' aspect={1 / 1} />
      <VentasTotales />
    </Container>
  );
}
