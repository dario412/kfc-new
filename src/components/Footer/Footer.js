import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import { ReactComponent as ThreeLines } from "../../assets/3lines.svg";
import { ReactComponent as FooterLogo } from "../../assets/footer_logo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,

        height: "600px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2} sx={{ width: "1300px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            height: "20%",
          }}
        >
          <Grid item xs={4}></Grid>{" "}
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <ThreeLines />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container spacing={3} sx={{ height: "60%" }}>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              color: "#fff",
            }}
            gap={1}
          >
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM{" "}
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              color: "#fff",
            }}
            gap={1}
          >
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM{" "}
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FooterLogo sx={{ width: "150px", height: "300px" }} />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              color: "#fff",
            }}
            gap={1}
          >
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM{" "}
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              color: "#fff",
            }}
            gap={1}
          >
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM{" "}
            </Link>
            <Link href="#" underline="none" color="black">
              LOREM IPSUM
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={3}
          sx={{ height: "20%", backgroundColor: "#990088" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
