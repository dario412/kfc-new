import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactComponent as ThreeLinesWhite } from "../../../assets/3lines-white.svg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const VrabotuvanjeForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: "80px",
        pb: "80px",
        "& .MuiTextField-root": { borderColor: "white", width: "400px" },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "1300px",
          display: "flex",
          backgroundColor: "#D10A1F",
          height: "600px",
          borderRadius: "20px",
          "& .MuiGrid-item": {
            pt: 0,
          },
          // "& .css-7xafav-MuiGrid-root": {
          //   m: 0,
          // },
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center", p: 0, m: 0, pt: 0 }}>
          <ThreeLinesWhite />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", p: 0 }}>
          <Typography variant="h2" sx={{ color: "white" }}>
            БИДИ НАЈДОБАР, НАПРАВИ РАЗЛИКА, ЗАБАВУВАЈ СЕ!
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "end", p: 0 }}>
          <TextField
            label="ИМЕ"
            variant="outlined"
            type="text"
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "start", p: 0 }}>
          <TextField
            label="ПРЕЗИМЕ"
            variant="outlined"
            type="text"
            sx={{ borderColor: "white" }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "end", p: 0 }}>
          <TextField
            label="ЕМАИЛ"
            type="email"
            variant="outlined"
            sx={{ borderColor: "white" }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "start", pt: 0 }}>
          <TextField
            label="ТЕЛЕФОНСКИ БРОЈ"
            variant="outlined"
            type="numbers"
            sx={{ borderColor: "white" }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "end", pt: 0 }}>
          <TextField
            label="ДАТА НА РАЃАЊЕ"
            variant="outlined"
            type="numbers"
            sx={{ borderColor: "white" }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "start", pt: 0 }}>
          <TextField
            label="АДРЕСА НА ЖИВЕЕЊЕ"
            variant="outlined"
            type="numbers"
            sx={{ borderColor: "white" }}
            inputProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "center" }}
          gap={2}
        >
          <Grid item sx={{ textAlign: "end", pt: 0 }}>
            <TextField
              label="РЕСТОРАН"
              variant="outlined"
              type="numbers"
              sx={{ borderColor: "white", maxWidth: "258px" }}
              inputProps={{ style: { color: "white" } }}
            />
          </Grid>{" "}
          <Grid item sx={{ textAlign: "center", pt: 0 }}>
            <TextField
              label="РАБОТНО ВРЕМЕ"
              variant="outlined"
              type="numbers"
              sx={{ borderColor: "white", maxWidth: "258px" }}
              inputProps={{ style: { color: "white" } }}
            />
          </Grid>{" "}
          <Grid item sx={{ textAlign: "start", pt: 0 }}>
            <TextField
              label="ПОЗИЦИЈА"
              variant="outlined"
              type="numbers"
              sx={{ borderColor: "white", maxWidth: "258px" }}
              inputProps={{ style: { color: "white" } }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", pt: 0 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              p: "15px 40px",
              mt: "30px",
              fontSize: "18px",
              boxShadow: "none",
              borderRadius: 100,
              color: "#D10A1F",
              border: "3px solid #D10A1F",
              "&:hover": {
                backgroundColor: "#D10A1F",
                border: "3px solid white",
                boxShadow: "none",
                color: "white",
              },
            }}
          >
            Испрати
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VrabotuvanjeForm;
