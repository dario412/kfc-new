import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Ponuda = (props) => {
  return (
    <Grid container spacing={1} >
                <Grid item xs={12}>
                    <img src={props.image} />
                </Grid>
                <Grid item xs={7} sx={{marginLeft: '20px'}}>
                    <Typography variant='h2' py={1}>{props.title}</Typography>
                    <Typography variant='body'>{props.description}</Typography>
                </Grid>
                <Grid item xs={4} sx={{textAlign: 'right', marginRight: '20px'}}>
                    <Button variant="contained" sx={{mt: 1 }} >Нарачај</Button>
                </Grid>

    </Grid>
  )
}

export default Ponuda