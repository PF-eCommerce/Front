import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
//import { Box, Container, Divider, Typography } from "@mui/material";
//import { getAllOrders } from "../../../../redux/actions/ordersAction";

const VentasTotales = () => {
  const { orders, spent } = useSelector((state) => state.orders.allOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  const gananciasTotales = spent;
  //Funciones
  //Función para formatear fechas
  function formato(string) {
    if (string.length === 6) {
      return string.slice(0, 5) + "0" + string.slice(5, 6);
    }
    if (string.length === 7) {
      return string.slice(0, 5) + "" + string.slice(5, 7);
    }
  }

  //Función para sustituir meses
  const mesAReemplazar = (month) => {
    if (month.slice(5, 7) >= 10) return month.slice(5, 7);

    if (month.slice(6, 7) >= 9) return month.slice(6, 7);
  };
  //Le pasás cualquiera de las órdenes
  const gananciasPorFiltro = (order) => {
    return order?.map((p) => p?.totalPrice).reduce((a, b) => a + b, 0);
  };
  //Fechas
  const hoy = new Date().toISOString().slice(0, 10);
  const mes = hoy.slice(0, 7);
  const mesAnterior = formato(
    mes.replace(mesAReemplazar(mes), mesAReemplazar(mes) - 1)
  );
  //Órdenes
  const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);

  const ordersDelMes = orders?.filter((t) => t.date?.slice(0, 7) === mes);
  /*Ninguna del mes*/
  const ordersPasadas = orders?.filter((t) => t.date?.slice(0, 7) !== mes);

  //Pasadas
  const ordersDelMesAnterior = ordersPasadas?.filter(
    (t) => t.date?.slice(0, 7) === mesAnterior
  );
  //Ganancias
  const gananciasDelDia = gananciasPorFiltro(todayOrders);

  const gananciasSemanaAnterior = () => {
    const fechaAReemplazar = hoy.slice(8, 10);
    const semanaAtras = hoy.replace(fechaAReemplazar, hoy.slice(8, 10) - 7);
    const ganancias = orders?.filter((t) => t.date?.slice(0, 10) > semanaAtras);
    return gananciasPorFiltro(ganancias);
  };
  const gananciasDelMes = gananciasPorFiltro(ordersDelMes);
  const gananciasDelMesAnterior = gananciasPorFiltro(ordersDelMesAnterior);
  const ganancias3 = () => {
    const tresMesesAtras = formato(
      mesAnterior?.replace(
        mesAReemplazar(mesAnterior),
        mesAReemplazar(mesAnterior) - 2
      )
    );
    const ganancias = orders?.filter(
      (t) => t.date?.slice(0, 7) < tresMesesAtras
    );
    return gananciasPorFiltro(ganancias);
  };
  //Ventas
  const ventasDelDía = todayOrders?.length;
  const ventasHoy = todayOrders;
  const totalDeVentasHoy = gananciasDelDia;
  const porcentajeVenta = Math.round(
    (totalDeVentasHoy / gananciasTotales) * 100
  );

  return (
    <Container
      sx={{
        width: 250,
        backgroundColor: "white",
        borderRadius: "3px",
        boxShadow: "0px 0px 1px #424242",
        textDecoration: "none",
        pt: 1,
        ml: 1,
        mb: 2,
      }}
    >
      <Box>
        <Typography>Ingresos Totales</Typography>
      </Box>
      <Box>
        <Box sx={{ height: "15%", mb: 1, mt: 1 }}>
          <CircularProgressbar
            styles={{
              root: {},
              path: {
                stroke: `#4b00bb, ${porcentajeVenta / 100})`,
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },

              trail: {
                // Trail color
                stroke: "#a6989878",
                strokeLinecap: "round",
              },
              text: {
                fill: "#83066e",
                fontSize: "16px",
              },
            }}
            value={porcentajeVenta}
            text={`${porcentajeVenta} %`}
            strokeWidth={4}
          />
        </Box>
        <Typography>Ventas totales realizadas hoy</Typography>
        <Typography>{ventasDelDía}</Typography>
        <Typography variant='body2'>
          Procesamiento de transacciones anteriores. Es posible que no se
          incluyan los últimos pagos.
        </Typography>
        <Divider></Divider>
        <Container sx={{ my: 2, alignItems: "center" }}>
          <Box>
            <div>Objetivo</div>
            <div>
              <KeyboardArrowDownIcon fontSize='small' />
              <div>
                ${gananciasDelMesAnterior + gananciasDelMesAnterior * 0.37}
              </div>
            </div>
          </Box>
          <Divider sx={{ my: 0.8 }}></Divider>
          <Box>
            <div>Semana Pasada</div>
            <div>
              <KeyboardArrowDownIcon fontSize='small' />
              <div>{`$ ${gananciasSemanaAnterior()?.toLocaleString(
                "es"
              )}`}</div>
            </div>
          </Box>
          <Divider sx={{ my: 0.8 }}></Divider>
          <Box>
            <div>Mes Pasado</div>
            <div>
              <KeyboardArrowDownIcon fontSize='small' />
              <div>{`$ ${gananciasDelMesAnterior?.toLocaleString("es")}`}</div>
            </div>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default VentasTotales;
