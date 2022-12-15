import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Promotion from '../../../assets/promocii.svg';
import { Typography } from '@mui/material';
import FoodList from './FoodList/FoodList';
import Burger1 from '../../../assets/tower_burger.svg';
import ChickenBurrito from '../../../assets/chicken_burrito.svg'
import TripleDouble from '../../../assets/triple_double.svg';
import Zinger from '../../../assets/zinger.svg';
import OriginalBucket from '../../../assets/original_bucket.svg';
import KentuckyBucket from '../../../assets/kentucky_bucket.svg';
import CheeseBucket from '../../../assets/cheese_bucket.svg';
import FamilyBucket from '../../../assets/family_friends_bucket.svg';
import FiletBites from '../../../assets/filet_bites.svg';
import HotWings from '../../../assets/how_wings.svg';
import Crispies from '../../../assets/crispies.svg';
import ChickenPieces from '../../../assets/chicken_pieces.svg';
import FiletBitesSalad from '../../../assets/filet_bites_salad.svg';
import ColeSlaw from '../../../assets/cole_slaw.svg';
import KFCKidsMenu from '../../../assets/kfc_kids_menu.svg';
import ChickenKids from '../../../assets/chicken_kids_menu.svg';
import BurgerKids from '../../../assets/burger_kids_menu.svg';
import HeinzTomato from '../../../assets/heinz_tomato.svg';
import CreamyCurry from '../../../assets/creamy_curry.svg';
import Butter from '../../../assets/butter.svg';
import SweetImperial from '../../../assets/sweet_imperial.svg';

import MenuBurger from '../../../assets/side_burgeri_vrapovi.svg';
import MenuKofi from '../../../assets/side_kofi.svg';
import MenuZakuski from '../../../assets/side_zakuski.svg';
import MenuSalati from '../../../assets/side_salati.svg';
import MenuDeca from '../../../assets/side_deca.svg';
import MenuPrilozi from '../../../assets/side_prilozi.svg';
import SideMenu from './SideMenu/SideMenu';

import Akcija1 from '../../../assets/akcija1.svg';
import Akcija2 from '../../../assets/akcija2.svg';
import Akcija3 from '../../../assets/akcija3.svg';

const burgeri = [
    {
        image: Burger1,
        title: 'Tower Burger'
    },
    {
        image: ChickenBurrito,
        title: 'Chicken Burrito'
    },
    {
        image: TripleDouble,
        title: 'Triple Double'
    },
    {
        image: Zinger,
        title: 'Zinger'
    },
]

const kofi = [
    {
        image: OriginalBucket,
        title: 'Original Bucket'
    },
    {
        image: KentuckyBucket,
        title: 'Kentucky Bucket'
    },
    {
        image: FamilyBucket,
        title: 'Family & Friends Bucket'
    },
    {
        image: CheeseBucket,
        title: 'Cheese Bucket'
    },
]

const zakuski = [
    {
        image: FiletBites,
        title: 'KFC Filet Bites'
    },
    {
        image: HotWings,
        title: 'Hot Wings'
    },
    {
        image: ChickenPieces,
        title: 'Chicken Pieces'
    },
    {
        image: Crispies,
        title: 'Crispies'
    },
]

const salati = [
    {
        image: FiletBitesSalad,
        title: 'KFC Filet Bites Salad'
    },
    {
        image: ColeSlaw,
        title: 'Cole Slaw'
    },
]

const deca = [
    {
        image: KFCKidsMenu,
        title: 'KFC Kids Menu'
    },
    {
        image: ChickenKids,
        title: 'Chicken Kids Menu'
    },
    {
        image: BurgerKids,
        title: 'Burger Kids Menu'
    },
]

const prilozi = [
    {
        image: HeinzTomato,
        title: 'Heinz Tomato Ketchup'
    },
    {
        image: CreamyCurry,
        title: 'Creamy Curry Dip'
    },
    {
        image: SweetImperial,
        title: 'Sweet Imperial Dip'
    },
    {
        image: Butter,
        title: 'Butter'
    },
]

const menu = [
    {
        image: MenuBurger,
        isActive: true,
    },
    {
        image: MenuKofi,
        isActive: false,
    },
    {
        image: MenuZakuski,
        isActive: false,
    },
    {
        image: MenuSalati,
        isActive: true,
    },
    {
        image: MenuDeca,
        isActive: false,
    },
    {
        image: MenuPrilozi,
        isActive: false,
    },
]

const Menu = () => {
  return (<div>


    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '40px', pb: '80px', flexDirection: 'column' }}>
            <Grid container spacing={1} sx={{ width: '1300px', backgroundColor: '#D10A1F', borderRadius: '30px', pt: 0, pb: '50px', my: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', pb: '60px', m: 0}}>
                    <img src={Promotion}  />
                </Grid>

                <Grid item xs={4} sx={{ml: '20px'}}>
                <img src={Akcija1}  />
                </Grid>
                <Grid item xs={4}>
                <img src={Akcija2}  />
                </Grid>
                <Grid item xs={3}>
                <img src={Akcija3}  />
                </Grid>
            </Grid>

            <SideMenu sideMenuItems={menu} />


            {/* Burgeri i Vrapovi */}
            <Grid container id='burgeri' spacing={1} sx={{ backgroundColor: '#EBE9E2', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024' >БУРГЕРИ И ВРАПОВИ</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={burgeri} />
                </Grid>
            </Grid>

            {/* Kofi */}
            <Grid container id='kofi' spacing={1} sx={{ backgroundColor: '#E3E0D6', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024'>КОФИ</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={kofi} />
                </Grid>
            </Grid>

            {/* Zakuski */}
            <Grid container id='zakuski' spacing={1} sx={{ backgroundColor: '#EBE9E2', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024'>ЗАКУСКИ</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={zakuski} />
                </Grid>
            </Grid>

            {/* Salati */}
            <Grid container id='salati' spacing={1} sx={{ backgroundColor: '#E3E0D6', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024'>САЛАТИ</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={salati} />
                </Grid>
            </Grid>

            {/* Obroci za deca */}
            <Grid container id='deca' spacing={1} sx={{ backgroundColor: '#EBE9E2', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024'>ОБРОЦИ ЗА ДЕЦА</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={deca} />
                </Grid>
            </Grid>

            {/* Prilozi */}
            <Grid container id='prilozi' spacing={1} sx={{ backgroundColor: '#E3E0D6', py: '50px'}} >
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'top', justifyContent: 'center', p: 0, m: 0}}>
                    <Typography variant='h2' color='#FF0024'>ПРИЛОЗИ</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FoodList foodList={prilozi} />
                </Grid>
            </Grid>

        
    </Box>
    </div>
  )
}

export default Menu