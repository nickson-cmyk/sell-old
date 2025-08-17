import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffde0f"
    },
    secondary: {
      main: "#000000"
    }
  },
typography:{
    h6:{
        fontStyle:"arial",
        fontSize:20,
        fontWeight:500,
        whiteSpace:"nowrap"
    },
    h1:{
        fontSize:30,
        fontWeight:900,
        whiteSpace:"nowrap"
    }
}
});
export default theme;