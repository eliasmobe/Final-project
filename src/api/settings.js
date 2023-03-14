const BASE_URL = "http://localhost:3001/";
const GET_FACTURAS = `${BASE_URL}facturas`;
const POST_FACTURAS = `${BASE_URL}insertarfactura`;
const PUT_FACTURAS = `${BASE_URL}actualizarfactura`;
const DELETE_FACTURAS = `${BASE_URL}eliminarfactura`;
const GET_NOTICIAS = `${BASE_URL}noticias`;
const GET_NOTICIA = `${BASE_URL}unanoticia/:id`;
const POST_NOTICIAS = `${BASE_URL}insertarnoticias`;
const PUT_NOTICIAS = `${BASE_URL}actualizarnoticia`;
const DELETE_NOTICIAS = `${BASE_URL}eliminarnoticias`;
const GET_OFERTA = `${BASE_URL}oferta/:dni`;
const POST_OFERTA = `${BASE_URL}insertaroferta`;
const DELETE_OFERTA = `${BASE_URL}eliminaroferta`;
const GET_USUARIOS = `${BASE_URL}usuarios`;
const POST_USUARIO = `${BASE_URL}insertarusuario`;
const PUT_USUARIO = `${BASE_URL}actualizarusuario`;
const DELETE_USUARIO = `${BASE_URL}eliminarusuario`;
const LOGIN_USUARIO = `${BASE_URL}login`;
const POST_ADMIN = `${BASE_URL}insertaradmin`;
const PUT_ADMIN = `${BASE_URL}actualizaradmin`;
const DELETE_ADMIN = `${BASE_URL}eliminaradmin`;

export {
  BASE_URL,
  GET_FACTURAS,
  POST_FACTURAS,
  PUT_FACTURAS,
  DELETE_FACTURAS,
  GET_NOTICIAS,
  POST_NOTICIAS,
  PUT_NOTICIAS,
  DELETE_NOTICIAS,
  GET_OFERTA,
  POST_OFERTA,
  DELETE_OFERTA,
  GET_USUARIOS,
  POST_USUARIO,
  PUT_USUARIO,
  DELETE_USUARIO,
  LOGIN_USUARIO,
  POST_ADMIN,
  PUT_ADMIN,
  DELETE_ADMIN,
  GET_NOTICIA,
};
