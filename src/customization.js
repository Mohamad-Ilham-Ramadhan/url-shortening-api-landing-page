import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { poppins500, poppins700 } from "./fonts";

// <== Colors ==>
// ### Primary

const cyan = "hsl(180, 66%, 49%)";
const darkViolet = "hsl(257, 27%, 26%)";

// ### Secondary

const red = "hsl(0, 87%, 67%)";

// ### Neutral

const gray = "hsl(0, 0%, 75%)";
const grayishViolet = "hsl(257, 7%, 63%)";
const veryDarkBlue = "hsl(255, 11%, 22%)";
const veryDarkViolet = "hsl(260, 8%, 14%)";

const theme = createMuiTheme({});

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: cyan,
      darkViolet: darkViolet,
    },
    secondary: {
      main: red,
    },
    neutral: {
      gray: gray,
      grayishViolet: grayishViolet,
      veryDarkBlue: veryDarkBlue,
      veryDarkViolet: veryDarkViolet,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins500, poppins700],
        body: {
          fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: "white",
        },
        ".MuiButton-root.pill": {
          borderRadius: 150,
        },
      },
    },
    MuiContainer: {
      root: {
        padding: [0, 24],
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedPrimary: {
        color: "white",
        fontWeight: 700,
        "&:hover": {
          backgroundColor: lighten(cyan, 0.5),
        },
      },
    },
  },
});

export default customizedTheme;
