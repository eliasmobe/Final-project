import mountain from "../../images/mountain.jpg";
import { Box } from "@mui/system";
import { Image } from "mui-image";

export default function Inicio() {
  return (
    <Box>
      <Image src={mountain} alt="mountains" width="80%" height="50%" />
    </Box>
  );
}
