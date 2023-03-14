import { Grid, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GET_NOTICIA, PUT_NOTICIAS } from "../../api/settings";
import { Image } from "mui-image";
import { useAuthContext } from "../../context/AuthContext";
import Button from "@mui/material/Button";

export default function Details() {
  const navigate = useNavigate();
  const { userLogin } = useAuthContext();
  console.log(userLogin);
  const params = useParams();
  const { id } = params;
  const [showNews, setShowNews] = useState({
    titulo: "",
    texto: "",
    imagen: "",
  });
  const [putNews, setPutNews] = useState({
    titulo: "",
    texto: "",
    imagen: "",
  });

  useEffect(
    function() {
      async function fetchNews() {
        const response = await fetch(GET_NOTICIA.replace(":id", id));
        const showNews = await response.json();
        setShowNews(showNews);
      }
      fetchNews();
    },
    [id]
  );

  const handleInputs = (e) => {
    setPutNews({
      ...putNews,
      [e.target.name]: e.target.value,
    });
  };

  async function updateNews(e) {
    e.preventDefault();
    const newNews = {
      idnoticias: id,
      titulo: putNews.titulo,
      texto: putNews.texto,
      imagen: putNews.imagen.replace(
        "C:\\fakepath\\",
        "http://localhost:3001/images/"
      ),
    };
    const requestNew = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNews),
    };

    const response = await fetch(PUT_NOTICIAS, requestNew);
    let data = await response.json();
    setPutNews(putNews);
    navigate(`/news`);
    console.log("conolelog", data);
  }
  return (
    <>
      <Grid container xs={12} mt={5} mb={10} ml={5}>
        {showNews && (
          <>
            <Grid item md={6} ml={45}>
              <Image src={showNews.imagen} alt="..." width="100%"></Image>
            </Grid>
            <Grid ml={5} mt={5}>
              <Typography>{showNews.titulo}</Typography>
              <Grid mt={2.5}>
                <Typography>{showNews.texto}</Typography>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      {userLogin?.roles === "1" && (
        <Grid container>
          <Grid
            onSubmit={updateNews}
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
                onChange={handleInputs}
              />
            </Grid>
            <Grid>
              <TextField
                sx={{ ml: 3.5 }}
                variant="standard"
                error
                name="titulo"
                label="titulo"
                value={putNews.titulo}
                onChange={handleInputs}
              />
            </Grid>
            <Grid>
              <TextField
                sx={{ ml: 3.5 }}
                variant="standard"
                error
                name="texto"
                label="texto"
                value={putNews.texto}
                onChange={handleInputs}
              />
            </Grid>

            <Button
              sx={{ ml: 5, mt: 2, mr: 5, mb: 2 }}
              variant="contained"
              type="submit"
            >
              actualizar noticia
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
