import cielo from "../../images/cielo.jpg";
import { Grid } from "@mui/material";
import { Image } from "mui-image";
import { Typography } from "@mui/material";

export default function Nosotros() {
  return (
    <Grid container xs={12} mt={15} mb={10} ml={5}>
      <Grid item md={6}>
        <Image src={cielo} alt="..." width="100%" />
      </Grid>
      <Grid item md={6} mt={5}>
        <Typography ml={5} variant="h5">
          ¿Quienes somos?
        </Typography>
        <Typography ml={5}>
          Somos una empresa de asesoramiento energetico
        </Typography>
      </Grid>
    </Grid>
  );
}
