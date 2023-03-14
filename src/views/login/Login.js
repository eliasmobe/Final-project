import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { LOGIN_USUARIO } from "../../api/settings";
import { useAuthContext } from "../../context/AuthContext";

export default function Login() {
  const { setUserLogin } = useAuthContext();

  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  function handleInputs(e) {
    const { name } = e.target; //aqui desestructuro del objeto target la propiedad name , que es una de las propiedades que tiene
    setUser((user) => ({ ...user, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(LOGIN_USUARIO, requestUser);

    let data = await response.json();

    window.localStorage.setItem("usuario", JSON.stringify(data));

    setUserLogin(data);
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
              name="mail"
              label="mail"
              value={user.mail}
              onChange={handleInputs}
            />
          </Grid>
          <Grid mt={2.5} ml={2}>
            <TextField
              error
              type="password"
              name="password"
              label="contraseña"
              value={user.password}
              onChange={handleInputs}
            />
          </Grid>
          <Grid variant="contained" ml={7} mt={2.5} mb={1}>
            <Button variant="contained" type="submit">
              Inicio sesion
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
