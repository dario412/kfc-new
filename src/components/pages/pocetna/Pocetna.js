import React from "react";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from './Pocetna.css'

import Ponuda from "./ponuda/Ponuda";
import { ReactComponent as HeroBanner } from '../../../assets/hero_home.svg';
import HomeBanner  from '../../../assets/banner_home.png';
import  Slika1  from '../../../assets/burger_box.svg';
import  Slika4 from '../../../assets/crispy_box.svg';
import  Slika2 from '../../../assets/couple_box.svg';
import  Slika3 from '../../../assets/family_box.svg';





  
const Pocetna = () => {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', flexDirection: 'column' }}>
            <Grid container spacing={1} sx={{ width: '1300px'}} >
                <Grid item xs={12}>
                    <HeroBanner />
                </Grid>

                <Grid item sx={{width: 'fitContent'}}>
                    <Typography variant="h4">СЕЛЕКТИРАНА ПОНУДА</Typography>
                    <Divider sx={{ borderBottomWidth: 5, bgcolor: 'black' }} />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ width: '1300px'}} >
                <Grid item xs={6} sx={{mt: '40px'}}>
                    <Ponuda image={Slika1} title='Фамилијарна Понуда' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
                </Grid>

                <Grid item xs={6} sx={{mt: '40px'}}>
                    <Ponuda image={Slika2} title='Фамилијарна Понуда' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
                </Grid>
                
                <Grid item xs={6} sx={{mt: '40px'}}>
                    <Ponuda image={Slika3} title='Фамилијарна Понуда' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
                </Grid>

                <Grid item xs={6} sx={{mt: '40px'}}>
                    <Ponuda image={Slika4} title='Фамилијарна Понуда' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ width: '1300px'}} >
                <Grid item xs={12}>
                    <img style={{width: "1300px"}} src={HomeBanner} />
                </Grid>

                <Grid item sx={{width: 'fitContent'}}>
                    <Typography variant="h4">НОВОСТИ</Typography>
                    <Divider sx={{ borderBottomWidth: 5, bgcolor: 'black' }} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Pocetna;