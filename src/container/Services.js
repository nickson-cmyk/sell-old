import * as React from "react";
import { Grid, Typography } from "@mui/material";
import ServiceGrid from "../components/ServicesGrid";
import serviceGirl from "../Asset/Images/dl.beatsnoop.com-3ejJzkSmy6 (1).jpg"
import scrapBuyer from "../Asset/Images/dl.beatsnoop.com-YnkoI4U8me (1).jpg"
import productionPlant from "../Asset/Images/dl.beatsnoop.com-G5qnCbU8So (1) (1) (1) (4).jpg"

const Services = () => {
  const divElement = React.useRef();
  return (
    <Grid
      container
      spacing={1}
      flexDirection={"column"}
    >
      <Grid item>
        <Grid container justifyContent={"center"} className="services-header">
          <Typography variant="h1" mt={3}>
            OUR SERVICES
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={1}
          justifyContent={"space-between"}
          // className="cardConatiner"
        >
          <Grid item sm={1} xs={0}></Grid>
          <Grid item sm={3} xs={4}>
            <ServiceGrid title ="Household scrap to Scrap dealer" img={scrapBuyer} serId={0}></ServiceGrid>
          </Grid>
          <Grid item sm={3} xs={4}>
            <ServiceGrid title ="Scrap dealer to Recycler" img={serviceGirl} serId={1}></ServiceGrid>
          </Grid>
          <Grid item sm={3} xs={4}>
            <ServiceGrid title ="Scrap dealer to Production plant" img={productionPlant} serId={2}></ServiceGrid>
          </Grid>
          <Grid item sm={1} xs={0}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;

