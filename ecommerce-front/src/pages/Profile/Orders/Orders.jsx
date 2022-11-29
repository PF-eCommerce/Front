import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import OrdersModal from "./OrdersModal";

const OrdersList = () => {
  const orders = useSelector((state) => state.orders.userOrders.orders);

  const rows = orders?.map((o) => ({
    id: o._id,
    items: o.orderItems?.map((e) => e.name + ", "),
    amount: o.totalPrice,
    status: o.status,
    method: o.PaymentMethod,
    date: o.date.slice(0, 10),
  }));

  const orderColumns = [
    { field: "id", headerName: "ID de la Orden", width: 150 },
    {
      field: "items",
      headerName: "Productos",
      width: 270,
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
      field: "method",
      headerName: "M.de Pago",
      width: 110,
      renderCell: (params) => {
        return <div>{params.row.method}</div>;
      },
    },
    {
      field: "amount",
      headerName: "Monto",
      width: 110,
      renderCell: (params) => {
        return <div>${params.row.amount}</div>;
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 130,
      renderCell: (params) => {
        return <div>{params.row.date}</div>;
      },
    },
    {
      field: "action",
      headerName: "Detalle",
      description: "No se puede ordenar esta columna",
      sortable: false,
      renderCell: (params) => {
        if (params.row.id)
          return (
            <>
              <OrdersModal datos={params.row.id} />
            </>
          );
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
