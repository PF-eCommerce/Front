import {
  Box,
  Button,
  CircularProgress,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getOrder } from "../../../redux/actions/ordersAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #ff88005e",
  boxShadow: 5,
  pt: 2,
  px: 1,
  pb: 2,
  justifyContent: "center",
  alignItems: "center",
};
const Title = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  width: "100%",
  textAlign: "center",
  marginTop: "30px",
});
const SubTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "30px",
});
const Body = styled(Typography)({
  fontSize: "20px",
  marginLeft: "10px",
});
const Section = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});
const ButtonBack = styled(Button)({
  backgroundColor: "#94744F",
  color: "white",
  marginLeft: "30px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#624D34",
  },
});
const Flecha = styled(ArrowBackIcon)({
  color: "white",
});

export default function OrdersModal({ datos }) {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(datos));
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [dispatch, datos]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const order = useSelector((state) => state?.orders.order);

  return (
    <div>
      {!loading ? (
        <div>
          <CircularProgress color='inherit' />
        </div>
      ) : (
        <div>
          <Button onClick={handleOpen}>Ver</Button>

          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
          >
            <Box sx={{ ...style, width: 760 }}>
              <Section>
                <SubTitle>{`ID:`}</SubTitle>
                <Body>{order._id}</Body>
                <SubTitle>{`Fecha:`}</SubTitle>
                <Body>{order.date?.substring(0, 10)}</Body>
                <SubTitle>{`Precio total:`}</SubTitle>
                <Body>{"$" + order.totalPrice}</Body>
              </Section>
              <Section>
                <SubTitle>{`Metodo de pago:`}</SubTitle>
                <Body>{order.PaymentMethod}</Body>
                <SubTitle>{`Entrega:`}</SubTitle>
                <Body>{order.isDelivered ? "Entregado" : "Pendiente"}</Body>
                <SubTitle>{`Estado:`}</SubTitle>
                <Body>
                  {order.status === "Pending" ? "Pendiente" : "Pagado"}
                </Body>
              </Section>
              <Title>Datos del comprador</Title>
              <Section>
                <SubTitle>{`Nombre:`}</SubTitle>
                <Body>
                  {order ? order.userPaymentInfo.name : "Desconocido"}
                </Body>
                <SubTitle>{`Celular:`}</SubTitle>
                <Body>{order.userPaymentInfo.phone}</Body>
              </Section>
              <Section>
                <SubTitle>{`Direccion:`}</SubTitle>
                <Body>{`${
                  order.address.street_name ? order.address.street_name : ""
                }, ${
                  order.address.street_number
                    ? order.address.street_number
                    : "nada"
                }`}</Body>
                <SubTitle>{`Código Postal:`}</SubTitle>
                <Body>{order.address.zip_code}</Body>
              </Section>
              <Title>Detalle de productos</Title>
              {order.orderItems?.map((p) => {
                return (
                  <Section>
                    <SubTitle>{`Nombre:`}</SubTitle>
                    <Body>{p.name}</Body>
                    <SubTitle>{`Precio:`}</SubTitle>
                    <Body>{p.price}</Body>
                    <SubTitle>{`Unidades:`}</SubTitle>
                    <Body>{p.qty}</Body>
                  </Section>
                );
              })}
              <ButtonBack onClick={() => handleClose()}>
                <Flecha />
                Atrás
              </ButtonBack>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
