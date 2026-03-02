import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // ✅ headings become pure black
      secondary: "#4B5563", // ✅ body text gray
    },
  },

  typography: {
    // fontFamily: "Montserrat, sans-serif",
    // fontFamily: "Inter, sans-serif",
     fontFamily: '"Roboto", sans-serif',

    // h3: {
    //   fontSize: "38px",
    //   fontWeight: 600,
    //   lineHeight: "56px",
    //   letterSpacing: "-0.02em",

    //   "@media (max-width:900px)": {
    //     fontSize: "36px",
    //     lineHeight: "44px",
    //   },

    //   "@media (max-width:600px)": {
    //     fontSize: "30px",
    //     lineHeight: "38px",
    //   },
    // },
    // h4: {
    //   lineHeight: "56px",
    //   fontWeight: 600,
    // },

    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",

      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },
  },
});

export default theme;
