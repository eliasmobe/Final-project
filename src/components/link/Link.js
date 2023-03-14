import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledLink = styled(RouterLink)(() => ({
  textDecoration: "none",
}));

export default function Link({ linkTo, children }) {
  return <StyledLink to={linkTo}>{children}</StyledLink>;
}
