import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "../header";
import Footer from "../footer";

export default function LAYOUT() {
  return (
    <Box sx={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
