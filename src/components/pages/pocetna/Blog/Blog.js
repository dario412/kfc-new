import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Blog = (props) => {
  return (
    <Grid container spacing={1} >
        <img src={props.image} />
    <Grid item xs={12} sx={{mx: '20px'}}>
        <Typography variant='h3' py={1}>{props.title}</Typography>
        <Typography variant='body'>{props.description}</Typography>
        <br />
        <Button variant="contained" sx={{ mt: 1 }} >Види повеќе</Button>
    </Grid>
</Grid>
  )
}

export default Blog