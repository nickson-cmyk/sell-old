import React from "react";
import "react-multi-carousel/lib/styles.css";
import {Grid, Typography } from "@mui/material";

const Achievements = (props) => {
var hasFired = false;
window.addEventListener('scroll', function() {
  const counterele =document.getElementsByClassName('parentofachievements')[0];
  const counters=document.querySelectorAll('.counter');
  if (window.pageYOffset >counterele.clientHeight+window.innerHeight-100  && !hasFired) {
      counters.forEach((counter) => { 
      counter.innerText = 0;
      let count = 0;
      function updateCounte(){
        const target = +counter.getAttribute('data-target')
        if (count < target){
          count++;
          counter.innerText=count
          setTimeout(updateCounte,1)
        }else{
          counter.innerText = target
        }
      }
      updateCounte()
      hasFired=true
    })
  }else if(window.pageYOffset < counterele.clientHeight+window.innerHeight-100 || window.pageYOffset===0  && hasFired){
    counters.forEach((counter) => { 
      counter.innerText = 0;
    })
    hasFired=false
  }
});

  return (
    <Grid container className='contactusParent container-padding' justifyContent={"center"} direction={'row'}>
      <Typography variant='h1' mt={3}>ACHIEVEMENTS</Typography>
      <Grid container direction={'row'} justifyContent='space-around' spacing={2}>
        <Grid item xs={12} sm={4}>
          <Grid container direction={'column'} alignItems={'center'} className="achievement-item">
            <Typography variant='h6' mt={3}>TOTAL CUSTOMERS</Typography>
            <Grid className="counter" data-target="125">0</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction={'column'} alignItems={'center'} className="achievement-item">
            <Typography variant='h6' mt={3}>TOTAL SCRAP COLLECTED(TON)</Typography>
            <Grid className="counter" data-target="234">0</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction={'column'} alignItems={'center'} className="achievement-item">
            <Typography variant='h6' mt={3}>TOTAL SCRAP RECYCLED(TON)</Typography>
            <Grid className="counter" data-target="46">0</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid> 
  );
};

export default Achievements;
