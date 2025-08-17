import React from "react";
import "react-multi-carousel/lib/styles.css";
import {Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Clients = (props) => {

  return (
    <Grid container className='contactusParent' justifyContent={"center"} direction={'row'}>
    <Typography variant='h1' mt={3}>CONTACT US</Typography>
    <Grid container direction={'row'}  justifyContent='space-around'>
      <Grid item></Grid>
      <Grid item>
        <Grid container direction={'column'} alignItems={'center'}>
       <Typography variant='h6' mt={3}>CALL US</Typography>
       <Grid >+91 84381 92377</Grid>
       </Grid>
      </Grid>
      <Grid item>
      <Grid container direction={'column'} alignItems={'center'}>
       <Typography variant='h6' mt={3}>EMAIL US</Typography>
       <Grid >sellscrap@gmail.com</Grid>
       </Grid>
      </Grid>
      <Grid item>
      <Grid container direction={'column'} alignItems={'center'}>
       <Typography variant='h6' mt={3}>AREAS COVERED</Typography>
       <Grid >Chennai</Grid>
       <Grid >coimbatore</Grid>
       <Grid >madurai</Grid>
       </Grid>
      </Grid>
      <Grid item>
      <Grid container direction={'column'} alignItems={'center'}>
       <Typography variant='h6' mt={3}>FOLLOW US ON</Typography>
       <Grid item>
        <Grid container>
        <InstagramIcon/>
       <TwitterIcon/>
       <FacebookIcon/>
        </Grid>
       </Grid>
       </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
</Grid> 
  );
};

export default Clients;
