import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import fondo from "../../images/fondo.jpg";

const linkStyle = { color: "#ffebee" };

export default function Contacto() {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${fondo})`,
        repeat: "no-repeat",
        width: "100%",
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <Grid item>
        <Typography mt={20} ml={9} sx={{ color: "#ffebee" }}>
          contacto
        </Typography>
        <Typography variant="h5" ml={9} mt={7} sx={{ color: "#ffebee" }}>
          energyelias@gmail.com
        </Typography>
        <Typography variant="h5" ml={9} mt={2} sx={{ color: "#ffebee" }}>
          +34 333-333-333
        </Typography>
        <Typography mt={7} ml={9} sx={{ color: "#ffebee" }}>
          seguir
        </Typography>
        <Grid ml={9} mt={7}>
          <Link to={""} style={linkStyle}>
            <Typography variant="h5" sx={{ color: "#ffebee" }}>
              Facebook
            </Typography>
          </Link>
        </Grid>
        <Grid ml={9}>
          <Link to={""} style={linkStyle}>
            {" "}
            <Typography variant="h5" sx={{ color: "#ffebee" }}>
              Instagram
            </Typography>
          </Link>
        </Grid>
        <Grid ml={9}>
          <Link to={""} style={linkStyle}>
            {" "}
            <Typography variant="h5" sx={{ color: "#ffebee" }}>
              Twitter
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
