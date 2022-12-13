import React from "react";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../assets/logo_navbar.svg';
import styles from './Navbar.css'



  
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#FF0024', height: '80px', display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{ width: '1300px'}} >
            <Grid item xs={4}>
              <Logo />
            </Grid>
            <Grid item xs={8}>
                <Grid container sx={{ flexGrow: 1, height: '120px', display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={2}>
                        <Link href="#" underline="none" className="menu_item">
                            ПОЧЕТНА
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="#" underline="none" className="menu_item">
                            МЕНИ
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="#" underline="none" className="menu_item">
                            КАРИЕРА
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="#" underline="none" className="menu_item">
                            КОНТАКТ
                        </Link>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>               
            </Grid>

            </Grid>
        </Box>
      );
}

export default Navbar;