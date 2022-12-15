import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#53b88c",
    },
    secondary: {
      main: "#231f20",
    },
    text: {
      primary: "#231f20",
    },
    grayText: {
      main: "#9FA6AB",
    },
  },
  typography: {
    // fontFamily: "Social Gothic",
    fontFamily: "Open Sans",
    h1: {
      fontSize: "40px",
      fontWeight: 800,
    },
    h2: {
      fontSize: "34px",
      fontWeight: 800,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 4,
  },
  stepper: {
    iconColor: "#faad1c",
    fontSize: "3rem",
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontSize: "14px",
            fontWeight: 800,
            color: "white",
            p: "13px 21px",
            backgroundColor: "#FF0024",
            borderRadius: 100,
            boxShadow: "none",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            fontSize: "1.8rem",
            fontWeight: 500,
            padding: "0.7rem 4.7rem",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "20px",
              borderWidth: "3px",
            },
            "&:hover fieldset": {
              borderColor: "white",
              borderRadius: "20px",
              borderWidth: "3px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              borderRadius: "20px",
              borderWidth: "3px",
            },
          },
        },
      },
    },
  },
});
