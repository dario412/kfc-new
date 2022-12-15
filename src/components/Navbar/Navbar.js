import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { ReactComponent as Logo } from "../../assets/logo_navbar.svg";
import styles from "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const selected = "selected";
  const menu_item = "menu_item";

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#FF0024",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Grid container spacing={2} sx={{ width: "1300px" }}>
        <Grid item xs={4}>
          <Logo />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
          className="menu_bar"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? selected : menu_item)}
          >
            ПОЧЕТНА
          </NavLink>
          <NavLink
            to="/meni"
            className={({ isActive }) => (isActive ? selected : menu_item)}
          >
            МЕНИ
          </NavLink>
          <NavLink
            to="/kariera"
            className={({ isActive }) => (isActive ? selected : menu_item)}
          >
            КАРИЕРА
          </NavLink>
          <NavLink
            to="/kontakt"
            className={({ isActive }) => (isActive ? selected : menu_item)}
          >
            КОНТАКТ
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
