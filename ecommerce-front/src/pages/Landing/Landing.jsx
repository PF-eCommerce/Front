import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { ImageTrends, ImageButton1, ImageButton2, ImageButton4, ImageButton5, ImageInfo, ImageButton6, ImageButton7, ImageMessage } from "./ImageButtons";

const Landing = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <ImageTrends/>
        <Grid container xs={7.8}>
          <Grid
            xs={5.8}
            style={{
              marginLeft: 10,
            }}
          >
            <ImageButton1/>
          </Grid>
          <Grid
            xs={5.7}
            style={{
              marginLeft: 10,
            }}
          >
            <ImageButton2/>
          </Grid>
          <Grid
            xs={11.6}
            style={{
              marginLeft: 10,
            }}
          >
            <ImageButton4/>
          </Grid>
        </Grid>

        <Grid xs={4}>
          <ImageButton5/>
        </Grid>
            <ImageInfo/>
        <Grid
          xs={5.7}
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <ImageButton6/>
        </Grid>
        <Grid
          xs={5.8}
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <ImageButton7/>
        </Grid>
        <ImageMessage/>
      </Grid>
    </Box>
  );
};
export default Landing;
