import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/actions/productsAction";
import { useNavigate } from 'react-router-dom'

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'aquamarine',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    opacity: '0.5',
    transform: 'scale(1)'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ImageButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  // fontSize: 20,
  padding: '6px 12px',
  // border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'aquamarine',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    opacity: '0.7',
    transform: 'scale(1.05)'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Landing = () => {
  // const useStyles = styled(theme => ({
  //     root: {
  //       flexGrow: 1
  //     },
  //     paper: {
  //       padding: theme.spacing(2),
  //       textAlign: "center",
  //       color: 'none'
  //     }
  //   }));
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "none",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    //   color: theme.palette.text.secondary,
    color: "white",
    background: "none",
    border: "none",
    boxShadow: 'none',
    
  }));

  const CustomItem = styled(Paper, {})({
    ".MuiButton-root": {color: '#FF0000'}
    
  });
  
  

  const Item1 = styled(Paper)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "none",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleSelect = (e) => {
    e.preventDefault();
    console.log('TARGET VALUE', e.target.value)
    const value = e.target.value;
    dispatch(getCategories(value))
    
    navigate('/home')
  };

  // const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container
          xs={12}
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5f173b6f507f722ff8fd049d/1616490580704-S2KYVQT66SCCMQHWB26F/Tendencias+en+ropa+para+mujer+joven+verano+2021.jpg})`,
            height: "650px",
            marginTop: 20,
            marginBottom: 5,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            

            //  backgroundAttachment: 'fixed'
          }}
        >
          {/* <Paper className={classes.paper}>probandoo</Paper> */}
          <Grid xs={12}
            style={{
              marginBottom: "-85px",
              marginTop:'110px',
            }}
          >
          <Item
            style={{

              fontSize: "30px",
              fontFamily: "sans-serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              marginBottom: "-15px",
            }}
          >
            Selecciones
          </Item>
          </Grid>
          <Grid xs={12}
          style={{
            marginBottom: "-65px",
          }}
          >
          <Item
            style={{
              marginTop: "-5px",
              fontSize: "30px",
              fontFamily: "sans-serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Trés Bien
          </Item>
          </Grid>
          <Grid xs={12}
          style={{
            marginBottom: "-95px",
            marginTop: '-30px'
          }}
          >
          <Item
            style={{
              fontSize: "60px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
              marginBottom: "-35px",
            }}
          >
            TRENDS DE
          </Item>
          </Grid>
          <Grid xs={12}
          style={{
            marginBottom: "-95px",
            marginTop: '-50px'
          }}
          >
          <Item
            style={{
              fontSize: "60px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
              marginBottom: "-35px",
            }}
          >
            VERANO
          </Item>
          </Grid>
          <Grid xs={12}
          style={{
            marginBottom: "-65px",
            marginTop: '-70px'
          }}
          >
          <Item
            style={{
              fontSize: "60px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
              
            }}
          >
            20.22
          </Item>
          </Grid>
          <Grid xs={12}
          style={{
            marginBottom: "45px",
            marginTop: '-30px'
          }}
          >
          <Item
            style={{
              // fontSize: "30px",
              // fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
              // width: "250px",
              // border: 'solid white 2px',
              // background: 'none',
              // // color: 'black',
              // boxShadow:'none',

              
            }}
            
          >
            <BootstrapButton
            >IR A SELECCIÓN</BootstrapButton>
            
          </Item>
          </Grid>
          
          
        </Grid>
        <Grid container xs={7.8}>
          <Grid
            xs={5.8}
            style={{
              // backgroundImage: `url(https://img.freepik.com/fotos-premium/chica-adolescente-elegante-ropa-casual-camina-confianza-calle-verano-dia-mundial-turismo_381014-484.jpg)`,
              // height: "400px",
              marginLeft: 10,
              // borderRadius: "25px",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "center center",
              // '&:hover': {
              
              //   opacity: '0.5',
              //   transform: 'scale(1.05)'
              // },
              //  backgroundAttachment: 'fixed'
            }}
          >
            <ImageButton
            value= 'Blusas'
            onClick= {handleSelect}
            style={{
              backgroundImage: `url(https://img.freepik.com/fotos-premium/chica-adolescente-elegante-ropa-casual-camina-confianza-calle-verano-dia-mundial-turismo_381014-484.jpg)`,
              height: "400px",
              width: '100%',
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              
            }}
            >
              <Grid xs={12}
              style={{
                marginTop: '-300px'
              }}
              >
              <Item
              style={{
                fontSize: "45px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: 'flex-start'
              }}
            >
              Blusas
            </Item>
              </Grid>
              
              
            
            </ImageButton>
            
          </Grid>
          <Grid
            xs={5.7}
            style={{
              // backgroundImage: `url(https://visteconclase.com/imagenes/Puedo-combinar-un-abrigo-beige-de-hombre-con-zapatillas-deportivas.jpg)`,
              // height: "400px",
              marginLeft: 10,
              // borderRadius: "25px",

              //  backgroundSize:'cover',
              //  backgroundRepeat: 'no-repeat',
              //  backgroundPosition: 'center center',
              //  backgroundAttachment: 'fixed'
            }}
          >
            
            <ImageButton
            value= 'Abrigos'
            onClick= {handleSelect}
            style={{
              backgroundImage: `url(https://visteconclase.com/imagenes/Puedo-combinar-un-abrigo-beige-de-hombre-con-zapatillas-deportivas.jpg)`,
              height: "400px",
              width: '100%',
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // backgroundPosition: "center center",
            }}
            >
              <Grid xs={12}
              style={{
                marginTop: '300px'
              }}
              >
              <Item
              style={{
                fontSize: "45px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-end",
                alignContent: 'flex-end',
                color: 'black',
              }}
            >
              Abrigos
            </Item>
              </Grid>
            </ImageButton>
            {/* <Item
              style={{
                height: "350px",
                fontSize: "45px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-end",
                color: "black",
                alignItems: "end",
              }}
            >
              Abrigos
            </Item> */}
          </Grid>
          <Grid
            xs={11.6}
            style={{
              // backgroundImage: `url(https://media.istockphoto.com/id/857856490/photo/cheerful-black-guy-in-london.jpg?b=1&s=170667a&w=0&k=20&c=7w7Bbt-U7QjHCI5JfZHawd5ivO0PqSWoaU6IxD4Jw68=)`,
              // height: "375px",
              marginLeft: 10,
              // borderRadius: "25px",

              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "center center",
              //  backgroundAttachment: 'fixed'
            }}
          >
            <ImageButton
            value= 'Remeras'
            onClick= {handleSelect}
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/857856490/photo/cheerful-black-guy-in-london.jpg?b=1&s=170667a&w=0&k=20&c=7w7Bbt-U7QjHCI5JfZHawd5ivO0PqSWoaU6IxD4Jw68=)`,
              height: "375px",
              width: '100%',
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            >
              <Grid xs={12}
              style={{
                marginTop: '-300px'
              }}
              >
              <Item
              style={{
                fontSize: "60px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-end",
                alignContent: 'flex-end',
                color: 'white',
              }}
            >
              Remeras
            </Item>
              </Grid>
            </ImageButton>
            {/* <Item
              style={{
                fontSize: "60px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-end",
                // color: 'black'
              }}
            >
              Remeras
            </Item> */}
          </Grid>
        </Grid>

        <Grid
          xs={4}
          style={{
            // backgroundImage: `url(https://www.outfit-styles.com/wp-content/uploads/2019/07/Skinny-Jeans-Outfit-2019.jpg)`,
            // height: "800px",
            // marginTop: 10,
            // marginLeft: 10,
            // marginBottom: 10,

            // borderRadius: '25px',

            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            //  backgroundPosition: 'center center',
            //  backgroundAttachment: 'fixed'
          }}
        >
          <ImageButton
          value= 'Jeans'
          onClick= {handleSelect}
           style={{
            backgroundImage: `url(https://www.outfit-styles.com/wp-content/uploads/2019/07/Skinny-Jeans-Outfit-2019.jpg)`,
            height: "800px",
            width: '100%',
            borderRadius: "25px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
          }}>
            <Grid xs={12}
              style={{
                marginTop: '-700px'
              }}
              >
              <Item
              style={{
                fontSize: "65px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: 'flex-end',
                color: 'black',
              }}
            >
              Jeans
            </Item>
              </Grid>
          </ImageButton>
          {/* <Item
            style={{
              // height: '350px',
              fontSize: "65px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "flex-start",
              color: "black",
            }}
          >
            Jeans
          </Item> */}
        </Grid>

        <Grid
          container
          xs={12}
          style={{
            backgroundColor: "#33c9dc",
            height: "400px",
            marginTop: 5,
            // marginLeft: 10,
            // marginBottom: 10,

            // borderRadius: '25px',

            //  backgroundSize:'cover',
            //  backgroundRepeat: 'no-repeat',
            //  backgroundPosition: 'center center',
            //  backgroundAttachment: 'fixed'
          }}
        >
          <Grid xs={12}>
            <Item
              style={{
                height: "100px",
                fontSize: "45px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "end",
              }}
            >
              En Trés Bien garantizamos:
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item
              style={{
                fontSize: "35px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "end",
              }}
            >
              ENVÍOS GRATIS
            </Item>
            <Item
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "black",
                alignItems: "end",
              }}
            >
              Según zona
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item
              style={{
                fontSize: "35px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "end",
              }}
            >
              CALIDAD
            </Item>
            <Item
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "black",
                alignItems: "end",
              }}
            >
              Solo lo mejor, en todas las tiendas
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item
              style={{
                fontSize: "35px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "end",
              }}
            >
              PAGOS SEGUROS
            </Item>
            <Item
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                color: "black",
                alignItems: "end",
              }}
            >
              Todas nuestras plataformas son completamente confiables
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={5.7}
          style={{
            // backgroundImage: `url(https://i.pinimg.com/originals/18/34/99/183499d64bef2652a041e55bdd3fd7aa.jpg)`,
            // height: "600px",
            marginLeft: 20,
            marginTop: 20,
            // marginBottom: 20,
            // borderRadius: "25px",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            //  backgroundAttachment: 'fixed'
          }}
        >
          <ImageButton
          value= 'Vestidos'
          onClick= {handleSelect}
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/18/34/99/183499d64bef2652a041e55bdd3fd7aa.jpg)`,
            height: "600px",
            width: '100%',
            borderRadius: "25px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}>
          
          <Grid xs={12}
              style={{
                marginTop: '-460px'
              }}
              >
              <Item
              style={{
                fontSize: "65px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: 'flex-end',
                color: 'white',
              }}
            >
              Vestidos
            </Item>
              </Grid>

          </ImageButton>
          {/* <Item
            style={{
              // height: '350px',
              fontSize: "65px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "flex-start",
              color: "white",
            }}
          >
            Vestidos
          </Item> */}
        </Grid>
        <Grid
          xs={5.8}
          style={{
            // backgroundImage: `url(https://i.pinimg.com/originals/dc/53/94/dc5394110c2f8ce33f9fc13dc36d8abe.jpg)`,
            // height: "600px",
            marginLeft: 20,
            marginTop: 20,
            // marginBottom: 20,
            // borderRadius: "25px",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            //  backgroundAttachment: 'fixed'
          }}
        >
          <ImageButton
          value= 'Shorts'
          onClick= {handleSelect}
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/dc/53/94/dc5394110c2f8ce33f9fc13dc36d8abe.jpg)`,
            height: "600px",
            width: '100%',
            borderRadius: "25px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          >
            <Grid xs={12}
              style={{
                marginTop: '460px'
              }}
              >
              <Item
              style={{
                fontSize: "65px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: 'flex-end',
                color: 'white',
              }}
            >
              Shorts
            </Item>
              </Grid>

          </ImageButton>
          {/* <Item
            style={{
              height: "100%",
              fontSize: "65px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              color: "white",
            }}
          >
            Shorts
          </Item> */}
        </Grid>
        <Grid
          container
          spacing={2}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <Item>Que esperas</Item> */}
          <Grid
            xs={2.5}
            style={{
              backgroundImage: `url(https://www.somosmamas.com.ar/wp-content/uploads/2019/06/5-4.jpg)`,
              height: "380px",
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              //    borderRadius: '25px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              //  backgroundAttachment: 'fixed'
            }}
          ></Grid>
          <Grid
            xs={2}
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/47/ed/88/47ed88a27cec6ad6ba4348cd98772e75.jpg)`,
              height: "440px",
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              //    borderRadius: '25px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              //  backgroundAttachment: 'fixed'
            }}
          ></Grid>
          <Grid
            xs={2}
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg)`,
              height: "500px",
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              //    borderRadius: '25px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              //  backgroundAttachment: 'fixed'
            }}
          ></Grid>
          <Grid
            xs={4.7}
            style={{
              backgroundImage: `url(https://outfits.tips/wp-content/uploads/2021/10/outfit-rockero-para-hombre-con-chamarra-de-mezclilla-c4701650.jpg)`,
              height: "500px",
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              marginRight: 30,
              //    borderRadius: '25px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              //    backgroundPosition: 'center center',
              //  backgroundAttachment: 'fixed'
            }}
          >
            <Item
              style={{
                height: "100%",
                fontSize: "45px",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              ¿Qué esperás para enamorarte de tu proximo outfit?
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Landing;