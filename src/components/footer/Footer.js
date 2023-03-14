import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <Grid container spacing={3} xs={10}>
      <Grid item ml={89} mt={5} mb={15}>
        <FacebookIcon sx={{ mr: 3 }} />
        <InstagramIcon sx={{ mr: 3 }} />
        <TwitterIcon />
      </Grid>
    </Grid>
  );
}
