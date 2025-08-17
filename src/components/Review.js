import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import ReviewsIcon from '@mui/icons-material/Reviews';

let reviews=[{desp:"We hope that you will continue to support us in this mission. We are committed to making a positive impact on the environment, and your help is invaluable in this endeavor.",name:"Thomas, NY"},{desp:"Your contribution is invaluable and we can't thank you enough for all the hard work you have put in. We appreciate your commitment and dedication to making our environment a better place. Thank you!",name:"Stephen, AL"},{desp:"Your efforts are making a huge difference in helping us reduce waste and protect the environment. We sincerely appreciate your commitment to our mission and thank you for entrusting us with your scrap materials",name:"Angel, NY"},{desp:"We appreciate your support in helping to reduce waste. We are committed to providing a valuable service that not only helps the environment, but also provides financial compensation for your efforts.",name:"james, JL"}]
export default function ReviewComponent(props){
    return (
        <Grid container className='reviewParent container-padding' justifyContent={"center"} direction={'row'}>
            <Typography variant='h1' mt={3}>HAPPY CUSTOMERS</Typography>
            <Grid item>
            <Grid container direction={'row'} spacing={2} justifyContent='space-around'>
            {reviews.map(data=>(
                <Grid item sm ={2}>
                <ReviewsIcon style={{fontSize:"4vh", color:"#ffde0f", marginLeft:"-15px", marginTop:"25px" }}></ReviewsIcon>
                <Typography variant='body1'>{data.desp}</Typography>
                <Typography variant='body1' style={{textAlign:"right"}}>--{data.name}</Typography>
                </Grid>
            ))}
            </Grid>
            </Grid>
        </Grid> 
      );
}