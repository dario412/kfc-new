import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styles from "./Pocetna.css";
import ZivotKfc from "../../../assets/zivot_kfc.svg";
import Istorija from "../../../assets/kratka_istorija.svg";
import Inovativnost from "../../../assets/inovativnost.svg";
import Ponuda from "./ponuda/Ponuda";
import HeroBanner from "../../../assets/hero_home.png";
import HomeBanner from "../../../assets/banner_home.png";
import Slika1 from "../../../assets/burger_box.svg";
import Slika4 from "../../../assets/crispy_box.svg";
import Slika2 from "../../../assets/couple_box.svg";
import Slika3 from "../../../assets/family_box.svg";
import BlogSlika from "../../../assets/blog_test.svg";
import Blog from "./Blog/BlogCard";

const Pocetna = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "40px",
        pb: "80px",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={1} sx={{ width: "1300px" }}>
        <Grid item xs={12}>
          {/* <HeroBanner /> */}
          <img style={{ width: "1300px" }} src={HeroBanner} />
        </Grid>

        <Grid item sx={{ width: "fitContent" }}>
          <Typography variant="h2">СЕЛЕКТИРАНА ПОНУДА</Typography>
          <Divider sx={{ borderBottomWidth: 5, bgcolor: "black" }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ width: "1300px" }}>
        <Grid item xs={6} sx={{ mt: "40px" }}>
          <Ponuda
            image={Slika1}
            title="Crispy Box"
            description="Расположени за нешто крцкаво? Добијте 2 парчиња топло и крцкаво пилешко, обичен помфрит, пијалок и салата."
          />
        </Grid>

        <Grid item xs={6} sx={{ mt: "40px" }}>
          <Ponuda
            image={Slika2}
            title="Fillet box"
            description="Ова е најдобрата опција за една личност. Вклучени се неколку вкусни оброци кои ќе придонесат за уживање во јадењето."
          />
        </Grid>

        <Grid item xs={6} sx={{ mt: "40px" }}>
          <Ponuda
            image={Slika3}
            title="Double fillet Box"
            description="Како идеално решение за потребите на двајца, Double Fillet Box има сè што ви треба за крцкав и вкусен оброк.
            "
          />
        </Grid>

        <Grid item xs={6} sx={{ mt: "40px" }}>
          <Ponuda
            image={Slika4}
            title="Family bucket"
            description="Семејна кофа - ако целото семејство треба да го задоволи гладот, оваа кофа е тоа што го барате. 

            "
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ width: "1300px" }}>
        <Grid item xs={12}>
          <img style={{ width: "1300px" }} src={HomeBanner} />
        </Grid>

        <Grid item sx={{ width: "fitContent" }}>
          <Typography variant="h2">НОВОСТИ</Typography>
          <Divider sx={{ borderBottomWidth: 5, bgcolor: "black" }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ width: "1300px" }}>
        <Grid item xs={4} sx={{ mt: "40px" }}>
          <Blog
            image={ZivotKfc}
            title="ЖИВОТОТ ВО KFC"
            description="Вработените во KFC Македонија откриваат како е да се биде дел од најдобриот тим во светот? "
          />
        </Grid>

        <Grid item xs={4} sx={{ mt: "40px" }}>
          <Blog
            image={Istorija}
            title="КРАТКА ИСТОРИЈА"
            description="Преглед на историјата на KFC, од неговите почетоци во Кентаки до денешната глобална франшиза.  "
          />
        </Grid>

        <Grid item xs={4} sx={{ mt: "40px" }}>
          <Blog
            image={Inovativnost}
            title="ИНОВАТИВНОСТ"
            description="Иновативноста е збор кој го опишува KFC. Прочитајте како KFC со децении е чекор пред конкуренцијата.            "
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pocetna;
