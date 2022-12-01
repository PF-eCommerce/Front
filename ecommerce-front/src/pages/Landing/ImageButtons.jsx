import Grid from "@mui/material/Unstable_Grid2";
import {BootstrapButton} from '../../components/Styled/StyledButtons';
import { Item } from "../../components/Styled/StyledPaper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/actions/productsAction";
import { ImageButton } from "../../components/Styled/StyledButtons";
import Logos from "./Logos";
import Carousel from 'react-material-ui-carousel';
import LinearDeterminate from "../../components/Progress/MaterialUiProgress";

export const ImageTrends = ()=>{
    return(
        <Grid
        style={{
          height: "650px",
          width:'100%',
          marginTop: 20,
          marginBottom: 5,
        }}
        > 
        <LinearDeterminate/>
          <Carousel>
        <ImageTrends1/>
        <ImageTrends2/>
        <ImageTrends3/>
        </Carousel>
        </Grid>
        
      
      
    )
}
export const ImageTrends1 = ()=> {
    return(
        <Grid
          container
          xs={12}
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5f173b6f507f722ff8fd049d/1616490580704-S2KYVQT66SCCMQHWB26F/Tendencias+en+ropa+para+mujer+joven+verano+2021.jpg})`,
            height: "650px",
            // marginTop: 20,
            // marginBottom: 5,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width:"100%"

            
          }}
        > 
        
          <Grid
            xs={12}
            style={{
              marginBottom: "-85px",
              marginTop: "110px",
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
          <Grid
            xs={12}
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
          <Grid
            xs={12}
            style={{
              marginBottom: "-95px",
              marginTop: "-30px",
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
          <Grid
            xs={12}
            style={{
              marginBottom: "-95px",
              marginTop: "-50px",
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
          <Grid
            xs={12}
            style={{
              marginBottom: "-65px",
              marginTop: "-70px",
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
          <Grid
            xs={12}
            style={{
              marginBottom: "45px",
              marginTop: "-30px",
            }}
          >
            <Item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <BootstrapButton>IR A SELECCIÓN</BootstrapButton> */}
            </Item>
          </Grid>
        </Grid>
    )
}

export const ImageTrends2 = ()=> {
  return(
      <Grid
        container
        xs={12}
        style={{
          backgroundImage: `url(http://sorprendete.pe/wp-content/uploads/2022/04/Descuentos-W.jpg})`,
          height: "650px",
          // marginTop: 20,
          // marginBottom: 5,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width:"100%"

          
        }}
      >
        <Grid
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems:'center'
          }}
        >
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <BootstrapButton>NO TE LO PIERDAS!</BootstrapButton> */}
          </Item>
        </Grid>
      </Grid>
  )
}

export const ImageTrends3 = ()=> {
  return(
      <Grid
        container
        xs={12}
        style={{
          backgroundImage: `url(https://cmsphoto.ww-cdn.com/superstatic/81328/art/grande/40930198-34559071.jpg?v=1576776980.5958636})`,
          height: "650px",
          // marginTop: 20,
          // marginBottom: 5,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width:"100%"

          
        }}
      >
        <Grid
          xs={12}
          style={{
            height:'580px',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-end',
          }}
        >
          <Item
            style={{
              fontSize: "25px",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
            }}
          >
            CON TU COMPRA MAYOR A $15.000
          </Item>
        </Grid>
      </Grid>
  )
}

export const ImageButton1 = ()=> {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
      
    };

  return(
      <ImageButton
            value='Blusas'
            onClick={handleSelect}
            style={{
              backgroundImage: `url(https://img.freepik.com/fotos-premium/chica-adolescente-elegante-ropa-casual-camina-confianza-calle-verano-dia-mundial-turismo_381014-484.jpg)`,
              height: "400px",
              width: "100%",
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Grid
              xs={12}
              style={{
                marginTop: "-300px",
              }}
            >
              <Item
                style={{
                  fontSize: "45px",
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                Blusas
              </Item>
            </Grid>
          </ImageButton>
  )
}

export const ImageButton2 = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
  
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
    };
  return(
    <ImageButton
              value='Abrigos'
              onClick={handleSelect}
              style={{
                backgroundImage: `url(https://visteconclase.com/imagenes/Puedo-combinar-un-abrigo-beige-de-hombre-con-zapatillas-deportivas.jpg)`,
                height: "400px",
                width: "100%",
                borderRadius: "25px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Grid
                xs={12}
                style={{
                  marginTop: "300px",
                }}
              >
                <Item
                  style={{
                    fontSize: "45px",
                    fontFamily: "monospace",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignContent: "flex-end",
                    color: "black",
                  }}
                >
                  Abrigos
                </Item>
              </Grid>
            </ImageButton>
  )
}

export const ImageButton4 = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
  
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
    };
  return(
    <ImageButton
              value='Remeras'
              onClick={handleSelect}
              style={{
                backgroundImage: `url(https://media.istockphoto.com/id/857856490/photo/cheerful-black-guy-in-london.jpg?b=1&s=170667a&w=0&k=20&c=7w7Bbt-U7QjHCI5JfZHawd5ivO0PqSWoaU6IxD4Jw68=)`,
                height: "375px",
                width: "100%",
                borderRadius: "25px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Grid
                xs={12}
                style={{
                  marginTop: "-300px",
                }}
              >
                <Item
                  style={{
                    fontSize: "60px",
                    fontFamily: "monospace",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignContent: "flex-end",
                    color: "white",
                  }}
                >
                  Remeras
                </Item>
              </Grid>
            </ImageButton>
  )
}

export const ImageButton5 = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
  
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
    };
  return(
    <ImageButton
            value='Pantalones'
            onClick={handleSelect}
            style={{
              backgroundImage: `url(https://www.outfit-styles.com/wp-content/uploads/2019/07/Skinny-Jeans-Outfit-2019.jpg)`,
              height: "800px",
              width: "100%",
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid
              xs={12}
              style={{
                marginTop: "-700px",
              }}
            >
              <Item
                style={{
                  fontSize: "65px",
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "flex-end",
                  color: "black",
                }}
              >
                Jeans
              </Item>
            </Grid>
          </ImageButton>
  )
}

export const ImageButton6 = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
  
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
    };
  return(
    <ImageButton
            value='Vestidos'
            onClick={handleSelect}
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/18/34/99/183499d64bef2652a041e55bdd3fd7aa.jpg)`,
              height: "600px",
              width: "100%",
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Grid
              xs={12}
              style={{
                marginTop: "-460px",
              }}
            >
              <Item
                style={{
                  fontSize: "65px",
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "flex-end",
                  color: "white",
                }}
              >
                Vestidos
              </Item>
            </Grid>
          </ImageButton>
  )
}

export const ImageButton7 = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e) => {
      e.preventDefault();
      const value = e.target.value;
      dispatch(getCategories(value));
  
      setTimeout( ()=>{
        navigate("/home");
    }, 1000)
    };
  return(
    <ImageButton
            value='Zapatillas'
            onClick={handleSelect}
            style={{
              backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tendencias-deportivas-sneakers-2021-1-1612962401.jpg)`,
              height: "600px",
              width: "100%",
              borderRadius: "25px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Grid
              xs={12}
              style={{
                marginTop: "460px",
              }}
            >
              <Item
                style={{
                  fontSize: "65px",
                  fontFamily: "monospace",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "flex-end",
                  color: "white",
                }}
              >
                Zapatillas
              </Item>
            </Grid>
          </ImageButton>
  )
}

export const ImageInfo = () =>{
  
  return(
    <Grid
          container
          xs={12}
          style={{
            backgroundColor: "#D9B88D",
            height: "auto",
            marginTop: 5,
            width:"100%",
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
                textShadow:"0px 0px 5px #4C4848",
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
                textShadow:"0px 0px 5px #4C4848",
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
                textShadow:"0px 0px 5px #4C4848",
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
                textShadow:"0px 0px 5px #4C4848",
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
                flexWrap:"wrap",
              }}
            >
              Todas nuestras plataformas son completamente confiables
              <Logos />
            </Item>
          </Grid>
        </Grid>
  )
}

export const ImageMessage = () =>{
  
  return(
    <Grid
          container
          spacing={2}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width:"100%"
          }}
        >
          <Grid
            xs={2.5}
            style={{
              backgroundImage: `url(https://www.somosmamas.com.ar/wp-content/uploads/2019/06/5-4.jpg)`,
              height: "380px",
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 20,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
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
  )
}

