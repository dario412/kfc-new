import React from 'react';
import { Grid, Typography } from '@mui/material';
import heroImage from '../../../assets/blog_hero.svg';
import BlogCard from '../pocetna/Blog/BlogCard';
import  BlogSlika from '../../../assets/blog_test.svg';
import ZivotKfc from '../../../assets/zivot_kfc.svg';
import Istorija from '../../../assets/kratka_istorija.svg';
import Inovativnost from '../../../assets/inovativnost.svg';
import KujnaFico from '../../../assets/kujna_fico.svg';
import NovKFC from '../../../assets/noviot_kfc.svg';
import Originalen from '../../../assets/originalen_kfc.svg';
import Krckavo from '../../../assets/krckavo_vkusno.svg';
import Fondacija from '../../../assets/fondacija.svg';
import Familija from '../../../assets/krf_familija.svg';


const Blog = () => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'center'}}>

    <Grid container sx={{backgroundImage: `url(${heroImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '100px'}}>
        <Grid container sx={{width: '1300px'}}>
            <Grid item xs={5} sx={{backgroundColor: 'rgb(255,255,255,0.9)', p: '40px', borderRadius: '20px', height: 'fit-content'}}>
                <Typography variant='h4' sx={{fontWeight: 800, color: '#FF0024', pb: '20px'}}>НОВОСТИ ОД<br />СВЕТОТ НА KFC</Typography>
                <Typography variant='body' fontWeight={700} fontSize={20}>Биди во тек со сите новости околу франшизите на KFC, нивната работа и севкупната индустрија за брза храна.</Typography>
            </Grid>
        </Grid>
    </Grid>

    <Grid container sx={{width: '1300px'}}>
        <Grid item xs={4}>
            <BlogCard image={ZivotKfc} title='ЖИВОТОТ ВО KFC' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={Istorija} title='КРАТКА ИСТОРИЈА' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={Inovativnost} title='ИНОВАТИВНОСТ' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
    </Grid>

    <Grid container sx={{width: '1300px', py: '40px'}}>
        <Grid item xs={4}>
            <BlogCard image={KujnaFico} title='ВО КУЈНА СО ФИЧО' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={NovKFC} title='НОВИОТ KFC ВО СКОПЈЕ!' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={Originalen} title='КАКО ДА НАПРАВИТЕ KFC ДОМА' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
    </Grid>

    <Grid container sx={{width: '1300px', pb: '80px'}}>
        <Grid item xs={4}>
            <BlogCard image={Krckavo} title='КРЦКАВО И ВКУСНО ВО KFC!' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={Fondacija} title='ФОНДАЦИЈАТА KFC ДОНИРАШЕ' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
        <Grid item xs={4}>
            <BlogCard image={Familija} title='КFC ЗА ВАШАТА ФАМИЛИЈА!' description='Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.' />
        </Grid>
    </Grid>

    </Grid>
  )
}

export default Blog