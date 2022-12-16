import { Divider, Grid, Typography } from '@mui/material'
import heroImage from '../../../assets/hero_single_blog.jpeg';
import Bucket from '../../../assets/bucket.png';
import FotoStamp from '../../../assets/foto-stamp.png';
import Horse from '../../../assets/horse.png';
import Restaurant from '../../../assets/restaurant.jpeg';
import React from 'react'
import ZivotKfc from "../../../assets/zivot_kfc.svg";
import Istorija from "../../../assets/kratka_istorija.svg";
import Inovativnost from "../../../assets/inovativnost.svg";
import { textAlign } from '@mui/system';
import Blog from '../../pages/pocetna/Blog/BlogCard.js'


const SingleBlog = () => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'center'}}>

        <Grid container sx={{backgroundImage: `url(${heroImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Grid container sx={{width: '1300px'}}>
                <Grid item xs={6} sx={{backgroundColor: 'rgb(255,255,255,0.9)', p: '40px', borderRadius: '20px', height: 'fit-content'}}>
                    <Typography variant='h4' sx={{fontWeight: 800, color: '#FF0024', pb: '20px'}}>„ИМАВ САМО ДВЕ ПРАВИЛА: НАПРАВИ СЕ ШТО МОЖЕШ И НАПРАВИ ГО НАЈДОБРОТО ШТО МОЖЕШ“.</Typography>                </Grid>
            </Grid>
        </Grid>
        
        <Grid container backgroundColor={'#E4E1D9'} py={10} sx={{display: 'flex', justifyContent: 'center'}}>
            <Grid container sx={{width: '800px', backgroundColor: '#E4E1D9'}}>
                <Grid item xs={7}>
                    <Typography variant='h4' sx={{fontWeight: 800}}>ИСТОРИЈАТА НА KFC</Typography>              
                    <Divider  sx={{mb: '20px'}} />
                    <Typography variant='body' sx={{mt: '20px', fontSize: '18px'}}>Добре дојдовте во животот на Харланд Сандерс, човекот кој го основаше KFC, а потоа Кентаки Фрид Чикен. Вистински само-создаден човек чија историја, страст и филозофија и денес не инспирираат. Како дете, основачот на KFC ја откри својата страст за готвење, домашна храна и традиционалната јужна кујна.</Typography>  
                </Grid>

                <Grid item xs={5}>
                    <img src={Bucket} width={'270px'} height={'auto'} />
                </Grid>
            </Grid>
        </Grid>


        <Grid container backgroundColor={'#F1ECE2'} py={10} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container sx={{width: '1500px', textAlign: 'center'}}>
                <Grid item xs={3}>
                    <img src={Horse} width={'270px'} height={'auto'} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' sx={{fontWeight: 800, textAlign: 'center', mb: '20px'}}>1890–1903</Typography>              
                    <Typography variant='body' sx={{mt: '20px', fontSize: '18px'}}>Подадете рака - се разбира од мали нозе<br /> <br />
Харланд Д. Сандерс е роден на 9 септември 1890 година во Хенривил, Индијана. На шестгодишна возраст го изгубил својот татко. Со оглед на тоа што неговата мајка сега е сама за да го издржува семејството, Харланд се грижи за двајцата помали браќа и сестри и презема многу задолженија низ куќата, вклучително и готвењето, што се покажува како природно.<br /><br />
На десетгодишна возраст тој веќе работеше со скратено работно време на фарма, носејќи дома два долари месечно – многу пари во тоа време. Има малку време за знаење за книги: Харланд го напушта училиштето во шесто одделение.</Typography>  
                </Grid>
                <Grid item={3}>
                    <img src={FotoStamp} width={'350px'} height={'auto'} />
                </Grid>
            </Grid>
        </Grid>


        <Grid container sx={{backgroundImage: `url(${Restaurant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
            <Grid container sx={{width: '1300px'}}>
                <Grid item xs={12} sx={{ p: '40px', borderRadius: '20px', height: 'fit-content', textAlign: 'right'}}>
                    <Typography variant='h4' sx={{fontWeight: 800, pb: '20px'}}>ПРВАТА ПРОДАВНИЦА НА KFC</Typography>                </Grid>
            </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ width: "1300px", mt: '50px' }}>
        <Grid item sx={{ width: "fitContent" }}>
          <Typography variant="h2">НОВОСТИ</Typography>
          <Divider sx={{ borderBottomWidth: 5, bgcolor: "black" }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ width: "1300px", mb: '80px' }}>
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

      
    </Grid>
  )
}

export default SingleBlog