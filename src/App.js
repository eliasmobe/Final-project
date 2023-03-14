import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./views/signIn";
import News from "./views/news";
import Nosotros from "./views/nosotros";
import Factura from "./views/factura";
import Contacto from "./views/contacto";

import Login from "./views/login";
import Layout from "./components/layout/Layout"; // con esta tres cuarto de lo mismo
import {
  LAYOUT,
  SIGNIN,
  CONTACTO,
  FACTURA,
  NEWS,
  US,
  LOGIN,
  OFFER,
  INICIO,
  DETAILS,
} from "./config/routes/paths";
import AuthContextProvider from "./context/AuthContext"; //esta importacion no estaba bien, tenias -> "./src/context..." tienes q decirle a donde navegar no donde esta la carpeta
import PublicRoute from "./components/public";
import PrivateRoute from "./components/private";
import Offer from "./views/offer";
import Inicio from "./views/inicio";
import Details from "./views/details";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={DETAILS} element={<Details />}></Route>
          <Route path={INICIO} element={<Inicio />}></Route>
          <Route path={OFFER} element={<Offer />}></Route>
          <Route path={LAYOUT} element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route path={SIGNIN} index element={<SignIn />} />
              <Route path={LOGIN} element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path={FACTURA} element={<Factura />} />
              <Route path={NEWS} element={<News />} />
            </Route>
            <Route path={US} element={<Nosotros />} />
            <Route path={CONTACTO} element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
