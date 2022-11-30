import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";

export const Presupuesto = (props) => (
  <Card sx={{ height: "28%", mr: 1 }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color='textSecondary' gutterBottom variant='overline'>
            Presupuesto
          </Typography>
          <Typography color='textPrimary' variant='h4'>
            $240150
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "blueviolet",
              height: 56,
              width: 56,
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowDownwardIcon color='error' />
        <Typography
          color='error'
          sx={{
            mr: 1,
          }}
          variant='body2'
        >
          12%
        </Typography>
        <Typography color='textSecondary' variant='caption'>
          Desde el último mes
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
