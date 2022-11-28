import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
// import { orders } from "../../../utils/data/orders";

const OrdersList = () => {
  const { orders } = useSelector((state) => state.orders.userOrders);

  const rows = orders?.map((o) => ({
    id: o.id,
    // items: o.orderItems?.map((e) => e.name + ", "),
    items: o.items,
    amount: o.price,
    status: o.status,
    date: o.date,
  }));

  const orderColumns = [
    { field: "id", headerName: "ID de la Orden", width: 100 },
    {
      field: "items",
      headerName: "Productos",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.items}</div>;
      },
    },
    {
      field: "status",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.status}</div>;
      },
    },
    {
      field: "amount",
      headerName: "Monto",
      width: 95,
      renderCell: (params) => {
        return <div>${params.row.amount}</div>;
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 95,
      renderCell: (params) => {
        return <div>{params.row.date}</div>;
      },
    },
  ];
  if (orders?.length) {
    return (
      <Box>
        <DataGrid
          autoHeight
          sx={{ width: "95%" }}
          rows={rows}
          columns={orderColumns}
          pageSize={4}
          rowsPerPageOptions={[4]}
        />
      </Box>
    );
  } else {
    return (
      <>
        <Typography>Aún no has comprado nada</Typography>
      </>
    );
  }
};

export default OrdersList;
