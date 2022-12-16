import { Grid, Typography } from '@mui/material'
import React from 'react'
import './MapDetailItem.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const MapDetailItem = ({title, address, number}) => {
  return (  
    <Grid container spacing={2} className='map-detail-item' marginTop={'1px'} borderBottom={'1px solid #000'}>
      <Grid item xs={12}>
        <Typography variant='h3' color={'#FF0024'} >{title}</Typography>
      </Grid>

      <Grid item xs={6} >
        <Typography variant='body' >{address} <br /> <br /></Typography>
        <Typography variant='body' sx={{verticalAlign: 'middle', display: 'inline-flex', fontSize: '18px', color: '#FF0024', fontWeight: '700'}}><LocalPhoneOutlinedIcon />{number}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant='body' fontWeight={700} >Работно Време</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='body' >Пон - Пет<br />Сабота<br />Недела</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant='body' >11:00 - 21:00<br />11:00 - 21:00<br />11:00 - 21:00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MapDetailItem