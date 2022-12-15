import { Grid, Typography } from '@mui/material'
import heroImage from '../../../assets/hero_test_burger.svg';
import IngridientsTable from '../../../assets/ingridients_table.svg';
import React from 'react'
import FoodList from '../meni/FoodList/FoodList';
import Burger1 from '../../../assets/tower_burger.svg';
import TripleDouble from '../../../assets/triple_double.svg';
import Zinger from '../../../assets/zinger.svg';

const slicno = [
    {
        image: Burger1,
        title: 'Tower Burger'
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

const SingleProduct = () => {
  return (
    <Grid container sx={{display: 'felx', justifyContent: 'center'}}>

        <Grid container sx={{backgroundImage: `url(${heroImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '50px'}}>
            <Grid container sx={{width: '1300px'}}>
                <Grid item xs={5} sx={{backgroundColor: 'rgb(255,255,255,0.9)', p: '40px', borderRadius: '20px', height: 'fit-content'}}>
                    <Typography variant='h4' sx={{fontWeight: 800, color: '#FF0024', pb: '20px'}}>НОВО ВО KFC<br />TWISTER БУРГЕР</Typography>
                    <Typography variant='body' fontWeight={700}>Нашиот класик сега е достапен со крцкава сланина: бургерот Colonel Bacon!<br /><br />
                    Оригиналниот рецепт на KFC, со 100% пилешко месо и крцкава сланина. Што чекаш?</Typography>
                </Grid>
            </Grid>
        </Grid>

        <Grid container sx={{width: '1300px'}}>
            <Typography variant='h4' sx={{fontWeight: 800, py: '30px', color: '#FF0024'}}>СОСТОЈКИ И НУТРИТИВНИ ВРЕДНОСТИ</Typography>
            <img src={IngridientsTable}/>
        </Grid>

        <Grid container sx={{width: '1300px', display: 'flex', justifyContent: 'center', pt: '80px', pb: '200px'}}>
            <Typography variant='h4' sx={{fontWeight: 800, pt: '30px', pb: '45px', color: '#FF0024'}}>ИСТО ТАКА, МОЖЕ ДА ВИ СЕ ДОПАДНЕ</Typography>
            <FoodList foodList={slicno} />
        </Grid>


    </Grid>
  )
}

export default SingleProduct