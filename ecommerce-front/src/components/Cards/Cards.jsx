import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import {  Container, Grid } from "@mui/material";
import Card from "./Card/Card"

const products = [ {
  "_id": "63657794bfdc7216d3f5b1a7",
  "title": "Camiseta Titular Hombre Boca Juniors 21/22 - Azul adidas",
  "desc": "1981. Una leyenda del fútbol hace su debut en Boca Juniors con un uniforme que se convertiría en uno de los más preciados de la historia del club. Cuarenta años después vuelve el clásico escudo de cuatro estrellas. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tecnología AEROREADY.Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_894215-MLA52162948709_102022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_707317-MLA52162948706_102022-O.webp"
  ],
  "price": 11099,
  "inStock": true,
  "numStock": 20,
  "exists": false,
  "__v": 0
},
{
  "_id": "63695bfb4b5027a584493892",
  "title": "Remera Stranger Things",
  "desc": "Remeras Stranger Things, diferentes modelos",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_768295-MLA51587936554_092022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_736964-MLA41953802357_052020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_844388-MLA51468407538_092022-O.webp"
  ],
  "price": 5600,
  "inStock": true,
  "numStock": 20,
  "exists": true,
  "__v": 0
},
{
  "_id": "63695c7f4b5027a584493897",
  "title": "Remera Courage, el perro valiente",
  "desc": "Remeras RANGLAN - diseño: Coraje, el perro valiente",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_744519-MLA45280994482_032021-O.webp"
  ],
  "price": 7500,
  "inStock": true,
  "numStock": 25,
  "exists": true,
  "__v": 0
},
{
  "_id": "63695cfb4b5027a58449389c",
  "title": "Remera Programador",
  "desc": "Head-body-html-code-coder-web-developer-programming-joke",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_608202-MLA48728637612_012022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_868608-MLA49213085784_022022-O.webp"
  ],
  "price": 8200,
  "inStock": true,
  "numStock": 25,
  "exists": true,
  "__v": 0
},
{
  "_id": "63695d5b4b5027a5844938a1",
  "title": "Pantalon Jeans Levanta Cola",
  "desc": "JEANS OXFORD ELASTIZADOS TEMPORADA 2022",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_633930-MLA51097095479_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_774020-MLA51096971900_082022-O.webp"
  ],
  "price": 11200,
  "inStock": true,
  "numStock": 25,
  "exists": true,
  "__v": 0
},
{
  "_id": "63695e1c4b5027a5844938a6",
  "title": "Pantalon Cargo Jogger Babucha Gabardina Elastizada",
  "desc": "Pantalon cargo jogger con puño. marca disponible I-Run",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_795562-MLA49668930889_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_967047-MLA50355582429_062022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_930278-MLA50232212547_062022-O.webp"
  ],
  "price": 10280,
  "inStock": true,
  "numStock": 5,
  "exists": true,
  "__v": 0
},
{
  "_id": "63695e7e4b5027a5844938ab",
  "title": "Pantalon Hombre Babucha",
  "desc": "Pantalon Hombre Babucha Joggings Joggineta Jogger Yogin Gym",
  "img": [
      "https://http2.mlstatic.com/D_NQ_NP_625276-MLA52216049045_102022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_924183-MLA48170608077_112021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_812010-MLA50879495734_072022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_975041-MLA48170482804_112021-O.webp"
  ],
  "price": 3900,
  "inStock": true,
  "numStock": 50,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369dfd750d0ac5ebbcc521b",
  "title": "PLAYERA ADICOLOR CLASSICS TREFOIL",
  "desc": "La marca de las 3 Franjas siempre busca progresar. Ser la mejor. Creada con espíritu original, la colección Adicolor mantiene vivo el legado de adidas. Esta playera adidas rinde homenaje a la energía del deporte clásico con un gran logo del Trifolio en el pecho. Su tejido de punto jersey ofrece una sensación de total suavidad contra tu piel.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0202a667e7874b4dae7cac29011de108_9366/Playera_Adicolor_Classics_Trefoil_Azul_GN2975_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/707f2410d5ce41c5a90bac29010d68cf_9366/Playera_Adicolor_Classics_Trefoil_Blanco_GN2899_01_laydown.jpg"
  ],
  "price": 4000,
  "inStock": true,
  "numStock": 28,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369e5a3cb9e704afe41f04f",
  "title": "PLAYERA ESSENTIALS 3 FRANJAS",
  "desc": "Sigue mostrando tu lado más deportivo después de entrenar. Las 3 Franjas en contraste adornan los hombros y las mangas para crear un auténtico look deportivo. Esta playera está confeccionada en tejido de punto jersey de algodón para una sensación de máxima suavidad.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f39f35b9e27b44aaaef3a93d00d90fe3_9366/Playera_Essentials_3_Franjas_Blanco_DU0441_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ca76104bc0948a08f68a93d00d92f14_9366/Playera_Essentials_3_Franjas_Blanco_DU0441_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c953f994d1a24dd7a6b7aacb00fec907_9366/Playera_Essentials_3_Franjas_Azul_FM6228_01_laydown.jpg"
  ],
  "price": 4600,
  "inStock": true,
  "numStock": 20,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369e685cb9e704afe41f054",
  "title": "PLAYERA POLO MÉXICO TIRO 23",
  "desc": "Para mantener el ritmo intenso en la cancha los jugadores necesitan aprovechar cada instante de su tiempo fuera de ella. Los jugadores de la Selección Nacional de México visten polos como esta de adidas cuando descansan entre partidos disputados y sesiones de entrenamiento intensas. El nuevo escudo de la selección termotransferido en el tejido jersey suave brinda inspiración para los retos a venir.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf5d5550562b4e5fbfe9af0b017226ec_9366/Playera_Polo_Mexico_Tiro_23_Beige_HF1386_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86b5b977d3c54bcab59baf0b016f9d3a_9366/Playera_Polo_Mexico_Tiro_23_Beige_HF1386_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c30a593c63454dc2addfaf0b016f9793_9366/Playera_Polo_Mexico_Tiro_23_Beige_HF1386_41_detail.jpg"
  ],
  "price": 5600,
  "inStock": true,
  "numStock": 5,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369e771cb9e704afe41f059",
  "title": "JERSEY LOCAL SELECCIÓN NACIONAL DE MÉXICO triBUTO A SERGIO",
  "desc": "Regresa el tradicional color verde que identifica a México en todos los rincones del mundo. El cuello de la nueva camiseta es redondo con rayas rojas y en su diseño destaca la imagen del dios Quetzalcóatl con plumas en el cuello y cuerpo de serpiente, que simboliza la dualidad de la naturaleza humana tan característica de las culturas prehispánicas. Confeccionado con materiales reciclados y tecnología AEROREADY para absorber la humedad y mantenerte fresco en todo momento.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4009bf3f1f47fd83a6aeba00a19a7f_9366/Jersey_Local_Seleccion_Nacional_de_Mexico_Verde_HD6899_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b0d2adec97342ccad77aed300b22a06_9366/Jersey_Local_Seleccion_Nacional_de_Mexico_Verde_HD6899_02_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/48cf4ede496c4622ba9baeba00a1b391_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_01_laydown.jpg"
  ],
  "price": 6600,
  "inStock": true,
  "numStock": 12,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369e887cb9e704afe41f05e",
  "title": "JERSEY LOCAL ARGENTINA 22 TRIBUTO A LOS HENRYS ARGENTINOS",
  "desc": "La esencia de la selección argentina. Sus famosas tres franjas azules, sinónimo de talento y compromiso, son ya parte de la historia del fútbol. Esta Jersey adidas de su primera equipación recupera aquel look ganador para las jóvenes promesas del fútbol. Presenta un diseño creado para sus hinchas con un tejido suave y la tecnología transpirable AEROREADY que mantiene la piel fresca y seca. Los detalles en el interior de la nuca están inspirados en la bandera que con tanto orgullo defiende el equipo.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85350dca156641ed95d7ae4b0133e9d4_9366/Jersey_Local_Argentina_22_Blanco_HF1488_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/37483cf6669c48c1855aae4b0133f2b7_9366/Jersey_Local_Argentina_22_Blanco_HF1488_02_laydown_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f086f2d88cd4d44a38dae4b0134115c_9366/Jersey_Local_Argentina_22_Blanco_HF1488_43_detail.jpg"
  ],
  "price": 6700,
  "inStock": true,
  "numStock": 16,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369ebcecb9e704afe41f063",
  "title": "JERSEY UNIFORME DE LOCAL COLOMBIA 22 TRIBUTO HENRYS COLOMBIANOS",
  "desc": "Parte de un uniforme diseñado con los colores de la bandera nacional de Colombia, este jersey de fútbol adidas luce un estilo sencillo. Tiene el color característico del equipo cuando juega en casa y un estampado llamativo en los costados que refleja su jersey de visitante. Está hecho de tejido suave con tecnología de absorción AEROREADY para mantener cómodos a los seguidores en todo momento. El escudo del equipo tejido en el pecho y el lema- Unidos por un país en la nuca comparten tu orgullo.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70317ccbd19447478a78ae8900a5b98b_9366/Jersey_Uniforme_de_Local_Colombia_22_Amarillo_HB9170_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a6bbd581037456d8723ae8900a5c0a3_9366/Jersey_Uniforme_de_Local_Colombia_22_Amarillo_HB9170_02_laydown.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b001e77403014119a998aecc00efddc1_9366/Jersey_Uniforme_de_Local_Colombia_22_Amarillo_HB9170_21_model.jpg"
  ],
  "price": 6600,
  "inStock": true,
  "numStock": 18,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369ec77cb9e704afe41f068",
  "title": "PLAYERA OWN THE RUN",
  "desc": "Tu guardarropa está lleno de playeras de running que nunca funcionaron como querías. Unas muy gruesas, otras muy delgadas. Algunas demasiado ajustadas o demasiado holgadas. En fin, pero la que siempre terminas usando es esta playera adidas Own the Run. Hecha con materiales reciclados como parte de nuestro compromiso por alcanzar la sostenibilidad, es una prenda que mantiene tu cuerpo cómodo durante tus entrenamientos largos los domingos o los 5K que corres a la hora del almuerzo entre semana. No te contentes con la ropa que no te queda bien.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ec38f0fbd4e447ca2faab7c00aaff74_9366/Playera_Own_the_Run_Rosa_FT1430_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ca152c35df24825b006ab7c00ab0c83_9366/Playera_Own_the_Run_Rosa_FT1430_02_laydown_hover.jpg"
  ],
  "price": 3600,
  "inStock": true,
  "numStock": 88,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369eec3cb9e704afe41f06e",
  "title": "PLAYERA ADICOLOR HERITAGE NOW LARGE TREFOIL",
  "desc": "La colección Adicolor Heritage Now se inspira en diseños y siluetas clásicos. Con el sello inconfundible de adidas, sus prendas recrean modelos vintage con materiales y texturas de gran calidad y colores vibrantes — Florence Marrinier & Lena Sophie Anders, diseñadoras sénior de adidas Originals.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e149c7e166884b6d9398aef501019408_9366/Playera_Adicolor_Heritage_Now_Large_Trefoil_Rojo_IB3435_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39b3b747226f40f79b90aef30128585e_9366/Playera_Adicolor_Heritage_Now_Large_Trefoil_Rojo_IB3435_HM3_hover.jpg"
  ],
  "price": 3100,
  "inStock": true,
  "numStock": 58,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369f07fcb9e704afe41f073",
  "title": "TENIS COURTJAM CONTROL PARA TENIS",
  "desc": "No es solo participar. Es dominar el juego. El exterior de malla y la mediasuela Bounce flexible de estos tenis adidas para jugar tenis te mantienen cómodo en la cancha. Debajo, el refuerzo de TPU en el mediopié y la suela con agarre Adiwear para canchas duras te garantizan la mejor estabilidad. En el costado interno, los cordones ocultos y las zonas de abrasión específicamente optimizadas para el pie masculino hacen que estos tenis estén a la altura del desafío.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ddc6124b44c41a3b65aae1400ac0b62_9366/Tenis_Courtjam_Control_para_Tenis_Azul_GW2985_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7911e524eaf548a1b528ae1400ac1b82_9366/Tenis_Courtjam_Control_para_Tenis_Azul_GW2985_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7be3ce69f55b41c4b026ae1400ac23cf_9366/Tenis_Courtjam_Control_para_Tenis_Azul_GW2985_03_standard.jpg"
  ],
  "price": 15000,
  "inStock": true,
  "numStock": 28,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369f3b5cb9e704afe41f078",
  "title": "TENIS BARRICADE PARA TENIS",
  "desc": "Defiende tus colores. Utilizados por las mejores deportistas adidas en el máximo torneo del hemisferio sur, estos tenis para jugar tenis forman parte de una impactante colección que da a conocer las consecuencias del cambio climático. Su sistema de amarre intuitivo trabaja con los Sensepods en el talón para brindar un ajuste y sujeción inigualables. Debajo, una mediasuela acolchada Bounce y una placa de TPU en el mediopié ofrecen comodidad y estabilidad.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/824bddc7f5fc4fe39022aeba012e1301_9366/Tenis_Barricade_para_Tenis_Negro_GY1445_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed72674bb4d945658124aeba012e2c41_9366/Tenis_Barricade_para_Tenis_Negro_GY1445_02_standard_hover.jpg ",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2292c52a258f40c88e15aeba012e38e2_9366/Tenis_Barricade_para_Tenis_Negro_GY1445_03_standard.jpg"
  ],
  "price": 15900,
  "inStock": true,
  "numStock": 38,
  "exists": true,
  "__v": 0
},
{
  "_id": "6369f46acb9e704afe41f07d",
  "title": "TENIS MATCHBREAK SUPER",
  "desc": "Inspirados en los archivos, los Matchbreak Super ofrecen la suela vulcanizada de mayor calidad de adidas para el skateboarding. Con un exterior de gamuza premium, los Matchbreak Super se sienten cómodos y listos para la tabla de skate desde la primera postura. La plantilla Adiprene moldeada, el forro interno de lujo y el refuerzo Adituff resistente a la abrasión en la punta se encargan de que el ajuste y el control sean perfectos para el skateboarding, todo en un modelo moderno con look vintage.",
  "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9eb97ac08564fd18cd6ae5f015ddaa0_9366/Tenis_Matchbreak_Super_Blanco_GY6925_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ac767566aa24446aa9c8ae5f015e6f91_9366/Tenis_Matchbreak_Super_Blanco_GY6925_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b26c26af5184159bec6ae5f015e4c51_9366/Tenis_Matchbreak_Super_Blanco_GY6925_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3eb616bd08fe444b9be8ae5f015f5aa7_9366/Tenis_Matchbreak_Super_Blanco_GY6925_04_standard.jpg"
  ],
  "price": 12900,
  "inStock": true,
  "numStock": 12,
  "exists": true,
  "__v": 0
}]




const Cards = () => {
  return (
     <Container>
      <Grid container spacing={2} >
        {products?.map(produc=>(
        <Grid xs={12} md={6} lg={4} p={4} >
            <Card 
            title={produc.title}
            desc={produc.desc}
            price={produc.price}
            img={produc.img}
            numStock={produc.numStock}
            />
        </Grid>
        ))}
      </Grid>
     </Container>
  )
 
}

export default Cards


