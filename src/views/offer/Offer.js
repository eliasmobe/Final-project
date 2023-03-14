import { TextField, Typography } from "@mui/material";
import { GET_OFERTA } from "../../api/settings";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const linkStyle = { color: "#1976D2" };

export default function Offer() {
  const [userDNI, setUserDNI] = useState("");

  const [invoice, setInvoice] = useState(null);

  function handleInputs(e) {
    setUserDNI(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(GET_OFERTA.replace(":dni", userDNI));
    const invoice = await response.json();
    setInvoice(invoice);
    setUserDNI("");

    Swal.fire({
      title: "Oferta encontrada",

      icon: "success",
      allowOutsideClick: false,
    });
  }

  return (
    <Grid container xs={12} mt={9} mb={10} ml={5}>
      <Grid ml={75}>
        <form onSubmit={handleSubmit}>
          <TextField
            error
            name="dni_cliente"
            label="dni_cliente"
            value={userDNI}
            onChange={handleInputs}
          />
          <Grid ml={7} mt={2.5}>
            <Button variant="contained" type="submit">
              Mi oferta
            </Button>
          </Grid>
        </form>
        <Grid ml={4} mt={1}>
          <Link to="/nosotros" style={linkStyle}>
            <Button type="submit" variant="contained">
              Volver a menu
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid mt={15} ml={20}>
        {invoice && (
          <ThemeProvider theme={theme}>
            <Typography ml={25} variant="h5">
              TIENES UN 15% DE DESCUENTO CON LA EMPRESA ENERGY!!!
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                ml={41}
                sx={{
                  border: 1,
                  borderColor: "#FB8C00",
                  mr: 0,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ mt: 4, mb: 2, ml: 15 }}
                  variant="h6"
                  component="div"
                >
                  Tu factura
                </Typography>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={`Numero de referencia: ${invoice.num_referencia}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={`Nombre del cliente: ${invoice.nombre_cliente}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText primary={`DNI: ${invoice.dni_cliente}`} />
                    </ListItem>
                  </List>
                </Grid>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText primary={`EMAIL: ${invoice.email}`} />
                    </ListItem>
                  </List>
                </Grid>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={`Total consumo: ${invoice.total_consumo}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid ml={13}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={`Total factura: ${invoice.total_facturas}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </ThemeProvider>
        )}
      </Grid>
    </Grid>
  );
}
