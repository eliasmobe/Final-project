import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import {
  DELETE_NOTICIAS,
  GET_NOTICIAS,
  POST_NOTICIAS,
} from "../../api/settings";
import { useAuthContext } from "../../context/AuthContext";
import { Image } from "mui-image";
import mountain from "../../images/paisaje.jpg";
import { Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const linkStyle = { color: "#FAFAFA" };

export default function ImgMediaCard() {
  const navigate = useNavigate();
  const [showNews, setShowNews] = useState();
  const { userLogin } = useAuthContext();
  const [noticias, setNoticias] = useState({
    titulo: "",
    texto: "",
    imagen: "",
  });

  useEffect(function() {
    async function fetchNews() {
      const response = await fetch(GET_NOTICIAS);
      const showNews = await response.json();
      setShowNews(showNews);
    }
    fetchNews();
  }, []);

  const handleInputs = (e) => {
    setNoticias({
      ...noticias,
      [e.target.name]: e.target.value,
    });
  };

  const createNews = async (e) => {
    e.preventDefault();
    const newNews = {
      titulo: noticias.titulo,
      texto: noticias.texto,
      imagen: noticias.imagen.replace(
        "C:\\fakepath\\",
        "http://localhost:3001/images/"
      ),
    };

    const requestNews = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNews),
    };
    await fetch(POST_NOTICIAS, requestNews);
    navigate(0);
  };

  async function handleRemoveNews(id) {
    //le ponemos estto del id porque solo necesitamos esa propiedad para eliminar
    const requestNews = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idnoticias: id }), //con esto conseguimos cambiar lo de idnotias a id
    };
    const response = await fetch(DELETE_NOTICIAS, requestNews);

    let data = await response.json();

    let arrayNews = showNews.slice(
      showNews.findIndex((item) => item.id === id),
      1
    );

    setShowNews(arrayNews);

    console.log(data);
    navigate(0);
  }

  return (
    <>
      <Grid>
        <Image src={mountain} alt="..." width={"100%"} height={500}></Image>
        <Grid container spacing={3} xs={10} mt={2} ml={4}>
          {showNews &&
            showNews.map(({ idnoticias, imagen, titulo, texto }) => (
              <Grid item xs={3} sm={6} md={4} ml={25} key={idnoticias}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="..."
                    height="140"
                    image={imagen}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {texto.substring(0, 100)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {userLogin.roles === "1" && (
                      <Button onClick={() => handleRemoveNews(idnoticias)}>
                        eliminar noticias
                      </Button>
                    )}
                    <Link to={`/detalles/${idnoticias}`} style={linkStyle}>
                      <Button>detalles</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>

        {userLogin.roles === "1" && (
          <Grid container>
            <Grid
              onSubmit={createNews}
              component="form"
              xs={2}
              direction="column"
              mt={10}
              mb={10}
              ml={80}
              sx={{
                border: 1,
                borderColor: "#FB8C00",
                mr: 5,
                display: "flex",
                justifyContent: "center",
                borderRadius: "16px",
                flexDirection: "column",
              }}
            >
              {/* es muy importante que este el component form porque si no no funciona, has fallado dos veces en eso CUIDADO */}
              <Grid>
                <TextField
                  sx={{ ml: 3.5, mr: 3.5 }}
                  variant="standard"
                  error
                  type="file"
                  name="imagen"
                  label="imagen"
                  value={noticias.imagen}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid mt={2.5}>
                <TextField
                  sx={{ ml: 3.5 }}
                  variant="standard"
                  error
                  name="titulo"
                  label="titulo"
                  value={noticias.titulo}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid mt={2.5}>
                <TextField
                  sx={{ ml: 3.5 }}
                  variant="standard"
                  error
                  name="texto"
                  label="texto"
                  value={noticias.texto}
                  onChange={handleInputs}
                />
              </Grid>

              <Button
                sx={{ ml: 5, mt: 2, mr: 5, mb: 2 }}
                variant="contained"
                type="submit"
              >
                Subir noticia
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
