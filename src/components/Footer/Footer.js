import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import { ReactComponent as ThreeLines } from "../../assets/3lines.svg";
import { ReactComponent as FooterLogo } from "../../assets/footer_logo.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: 3,
        height: "600px",
        display: "flex",
        justifyContent: "center",
        p: 0,
      }}
    >
      <Grid container spacing={2} sx={{ width: "1300px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            height: "20%",
            mt: 0,
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
              mt: 0,
              p: 0,
            }}
          >
            <ThreeLines />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              p: 0,
            }}
          ></Grid>
        </Grid>
        <Grid container spacing={3} sx={{ height: "60%", p: 0 }}>
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
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ color: "black", pb: "10px" }}
            >
              НАВИГАЦИЈА
            </Typography>
            <Link href="/" underline="none" color="black" fontWeight={600}>
              ПОЧЕТНА
            </Link>
            <Link href="/meni" underline="none" color="black" fontWeight={600}>
              МЕНИ
            </Link>
            <Link href="/kariera" underline="none" color="black" fontWeight={600}>
              КАРИЕРА
            </Link>
            <Link href="/novosti" underline="none" color="black" fontWeight={600}>
              НОВОСТИ
            </Link>
            <Link href="/kontakt" underline="none" color="black" fontWeight={600}>
              КОНТАКТ
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
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ color: "black", pb: "10px" }}
            >
              ЗА НАС
            </Typography>
            <Link href="/novosti" underline="none" color="black" fontWeight={600}>
              НОВОСТИ
            </Link>
            <Link href="/kariera" underline="none" color="black" fontWeight={600}>
              КАРИЕРА
            </Link>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              ЛОКАЦИИ
            </Link>
            <Link href="/politika-na-privatnost" underline="none" color="black" fontWeight={600}>
              П. НА ПРИВАТНОСТ
            </Link>
            <Link href="/uslovi-za-koristenje" underline="none" color="black" fontWeight={600}>
              У. ЗА КОРИСТЕЊЕ
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
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ color: "black", pb: "10px" }}
            >
              ГЛАВНО МЕНИ
            </Typography>
            <Link href="/meni#burgeri" underline="none" color="black" fontWeight={600}>
              БУРГЕРИ И ВРАПОВИ
            </Link>
            <Link href="/meni#kofi" underline="none" color="black" fontWeight={600}>
              КОФИ
            </Link>
            <Link href="/meni#zakuski" underline="none" color="black" fontWeight={600}>
              ЗАКУСКИ
            </Link>
            <Link href="/meni#salati" underline="none" color="black" fontWeight={600}>
              САЛАТИ
            </Link>
            <Link href="/meni#deca" underline="none" color="black" fontWeight={600}>
              ОБРОЦИ ЗА ДЕЦА
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
            {" "}
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ color: "black", pb: "10px" }}
            >
              КОНТАКТ
            </Typography>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              KFC SKOPJE CITY MALL
            </Link>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              KFC EAST GATE MALL
            </Link>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              KFC DRIVE THRU OKTA
            </Link>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              KFC POINT RETAIL PARK
            </Link>
            <Link href="/map" underline="none" color="black" fontWeight={600}>
              KFC PALMA MALL
            </Link>
          </Grid>
        </Grid>
        <Grid container item spacing={3} sx={{ height: "20%" }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              p: 0,
            }}
          >
            <Link href="#" underline="none" color="black">
              ® All Rights Reserved{" "}
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
            gap={3}
          >
            <Facebook />
            <Instagram />
            <Twitter />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
