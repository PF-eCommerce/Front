 import { Box, Typography } from "@mui/material";
 import React from "react";
 import { useSelector } from "react-redux";
 import {
   AreaChart,
   Area,
   XAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
 } from "recharts";

 const Chart = ({ aspect, title }) => {
   const { orders, spent } = useSelector((state) => state.orders.allOrders);
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
     if (month.slice(5, 7) <= 10) return month.slice(5, 7);

     if (month.slice(6, 7) >= 9) return month.slice(6, 7);
   };
   //Le pasás cualquiera de las órdenes y te da su ganancia
   const gananciasPorFiltro = (order) => {
     return order?.map((p) => p.totalPrice).reduce((a, b) => a + b, 0);
   };

   //Fechas
   const hoy = new Date().toISOString().slice(0, 10);
   const mes = hoy.slice(0, 7);
   const mesAnterior = formato(
     mes.replace(mesAReemplazar(mes), mesAReemplazar(mes) - 1)
   );

   const todayOrders = orders?.filter((t) => t.date?.slice(0, 10) === hoy);

   const gananciasSemanaAnterior = () => {
     const fechaAReemplazar = hoy.slice(8, 10);
     const semanaAtras = hoy.replace(fechaAReemplazar, fechaAReemplazar - 7);
     const ganancias = orders?.filter((t) => t.date?.slice(0, 10) > semanaAtras);
     console.log("ORDENES DE LA SEMANA ANTERIOR", ganancias);
     return gananciasPorFiltro(ganancias);
   };

   const ordersDelMes = orders?.filter((t) => t.date?.slice(0, 7) === mes);

   const gananciasDelDia = gananciasPorFiltro(todayOrders);

   const gananciasDelMes = gananciasPorFiltro(ordersDelMes);

   const mes2 = () => {
     const dosMesesAtrás = formato(
       mesAnterior?.replace(
         mesAReemplazar(mesAnterior),
         mesAReemplazar(mesAnterior) - 1
       )
     );

     const gananciasDosMeses = orders?.filter(
       (t) => t.date?.slice(0, 7) < dosMesesAtrás
     );
     return gananciasPorFiltro(gananciasDosMeses);
   };

   const ganancias3 = () => {
     const tresMesesAtras = formato(
       mesAnterior?.replace(
         mesAReemplazar(mesAnterior),
         mesAReemplazar(mesAnterior) - 2
       )
     );
     const ganancias = orders?.filter(
       (t) => t.date?.slice(0, 7) > tresMesesAtras
     );
     return gananciasPorFiltro(ganancias);
   };

   /* const { lastSalesMonth, beforeLastMonth, lastThreeMonth } = useSelector((state) => state.dashboard); */
   const data = [
     { name: "Ago", Total: `${ganancias3()}` },
     { name: "Sep", Total: `${mes2()}` },
     { name: "Oct", Total: `${gananciasDelMes}` },
   ];

   return (
     <Box
       sx={{
         flex: 4,
         p: 2,
         ml: 1,
         borderRadius: "3px",
       }}
     >
       <Typography variant='body1'>{title}</Typography>
       <ResponsiveContainer height='100%' aspect={aspect}>
         <AreaChart width={730} height={250} data={data}>
           <defs>
             <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
               <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
               <stop offset='95%' stopColor='#9044dc' stopOpacity={0} />
             </linearGradient>
           </defs>
           <XAxis dataKey='name' stroke='#8884d8' />
           <CartesianGrid strokeDasharray='3 3' />
           <Tooltip />
           <Area
             type='monotone'
             dataKey='Total'
             stroke='#c00f76'
             fillOpacity={1}
             fill='url(#total)'
           />
         </AreaChart>
       </ResponsiveContainer>
     </Box>
   );
 };

 export default Chart;
