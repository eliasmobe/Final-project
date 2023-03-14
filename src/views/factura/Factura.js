import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_FACTURAS } from "../../api/settings";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { Grid } from "@mui/material";

export default function Invoice() {
  const navigate = useNavigate();

  const [newInvoice, setNewInvoice] = useState({
    num_referencia: "",
    nombre_cliente: "",
    dni_cliente: "",
    email: "",
    total_facturas: "",
    total_consumo: "",
  });

  /* const [invoiceIsEditing, setInvoiceIsEditing] = useState(); */

  function handleInputs(e) {
    const { name } = e.target;
    setNewInvoice((invoices) => ({ ...invoices, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInvoice),
    };
    await fetch(POST_FACTURAS, requestUser);
    navigate("/oferta");
  }

  return (
    <Grid container>
      <Grid
        item
        xs={2}
        direction="column"
        mt={10}
        mb={10}
        ml={40}
        sx={{
          border: 1,
          borderColor: "#FB8C00",
          mr: 10,
          display: "flex",
          justifyContent: "center",
          borderRadius: "16px",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              type="text"
              name="num_referencia"
              label="num_referencia"
              value={newInvoice.num_referencia}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              name="nombre_cliente"
              label="nombre_cliente"
              value={newInvoice.nombre_cliente}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              name="dni_cliente"
              label="dni_cliente"
              value={newInvoice.dni_cliente}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              name="email"
              label="email"
              value={newInvoice.email}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              name="total_facturas"
              label="total_facturas"
              value={newInvoice.total_facturas}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2}>
            <TextField
              sx={{ ml: 2.5 }}
              variant="filled"
              error
              name="total_consumo"
              label="total_consumo"
              value={newInvoice.total_consumo}
              onChange={handleInputs}
            />
          </Grid>
          <Button
            sx={{ ml: 6, mt: 2, mb: 2 }}
            variant="contained"
            type="submit"
          >
            Subir factura
          </Button>
        </form>
      </Grid>

      <Grid item md={6} mt={25} ml={13}>
        <Typography ml={5} variant="h5">
          Envianos tu factura
        </Typography>
        <Typography ml={5} variant="body2">
          Somos una empresa de asesoramiento energetico
        </Typography>
      </Grid>
    </Grid>
  );
}
