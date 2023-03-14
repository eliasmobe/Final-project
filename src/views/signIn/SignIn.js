import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_USUARIO } from "../../api/settings";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function SignIn() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    nombre_usuario: "", //el estado tiene que coincidir con las propiedades de la base de datos y que tenga los mismo campos que la query
    password: "",
    mail: "",
  });

  function handleInputs(e) {
    const { name } = e.target; //aqui desestructuro del objeto target la propiedad name , que es una de las propiedades que tiene
    setNewUser((users) => ({ ...users, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    await fetch(POST_USUARIO, requestUser);
    navigate("/login");
  }

  return (
    <Grid container>
      <Grid
        item
        xs={2}
        direction="column"
        mt={10}
        mb={10}
        ml={80}
        sx={{
          border: 1,
          borderColor: "#1A237E",
          mr: 0,
          display: "flex",
          justifyContent: "center",
          borderRadius: "4px",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          {" "}
          {/* el onSubmit tiene que ir en un form por fuerza, fijarte si el box tiene un componente form , porque te puede dar fallo */}
          <Grid mt={2} ml={2}>
            <TextField
              error
              label="usuario" //esto tiene que coincidir con el nombre del objeto del estado
              name="nombre_usuario"
              value={newUser.nombre_usuario}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2.5} ml={2}>
            <TextField
              error
              type="password"
              name="password"
              label="contraseña"
              value={newUser.password}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2.5} ml={2}>
            <TextField
              error
              name="mail"
              label="mail"
              value={newUser.mail}
              onChange={handleInputs}
            />
          </Grid>
          <Grid variant="contained" ml={9} mt={2.5} mb={1}>
            <Button variant="contained" type="submit">
              Registrar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
