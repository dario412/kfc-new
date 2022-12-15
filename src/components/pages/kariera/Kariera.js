import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactComponent as ThreeLinesWhite } from "../../../assets/3lines-white.svg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as KarieraImg } from "../../../assets/image 73.png";
import KarieraAccordion from "./accordion";

const Kariera = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "80px",
        pb: "80px",
        "& .MuiTextField-root": { borderColor: "white" },
      }}
    >
      <Box sx={{ width: "1300px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "1300px",
            display: "flex",
            backgroundColor: "#D10A1F",
            height: "fit-content",
            borderRadius: "20px",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "center", p: 0, m: 0, pt: 0 }}>
            <ThreeLinesWhite />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", p: 0 }}>
            <Typography variant="h2" sx={{ color: "white", pt: "30px" }}>
              БИДИ НАЈДОБАР, НАПРАВИ РАЗЛИКА, ЗАБАВУВАЈ СЕ!
            </Typography>
            <Typography variant="h2" sx={{ color: "white", m: "40px" }}>
              СТАНИ дел од еден од најголемите ланци за брза храна во светот. СО
              преку 22.000 ресторани во 150 земји, KFC е лидер кој со децении ги
              поставува стандардите на квалитетна и вкусна брза храна.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sx={{ mt: "40px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D10A1F",
                textAlign: "left",
                textTransform: "uppercase",
                fontWeight: "800",
              }}
            >
              стани дел од тимот кој победува
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                pt: "20px",
                textAlign: "left",
              }}
            >
              Ако сте ентузијасти за системска гастрономија, сте страствен
              домаќин и сакате да се развивате понатаму во нашата брзорастечка
              компанија, имате четири опции за почеток како да започнете во KFC:
              - Член на тимот - Шеф на смена - Асистент на генералниот менаџер -
              Генерален менаџер на ресторан
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
        </Grid>
      </Box>
      <Grid xs={12} sx={{ mt: "30px", mb: "30px" }}>
        <Grid item xs={12} sx={{ backgroundColor: "#D4CEC0" }}>
          <Typography
            variant="h2"
            sx={{ maxWidth: "1300px", pt: "30px", pb: "30px" }}
          >
            КРАТКИ ИНФОРМАЦИИ ЗА НАШИТЕ РАБОТНИ ПОЗИЦИИ ВО РЕСТОРАНОТ МОЖЕТЕ ДА
            НАЈДЕТЕ ТУКА:
          </Typography>
        </Grid>
        <KarieraAccordion />
      </Grid>
    </Box>
  );
};

export default Kariera;
