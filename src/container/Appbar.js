import * as React from "react";
import { Typography, Toolbar, AppBar, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import BasicButton from "../components/BasicButton";
import ImageSlide from "./ImageSlider";
import Services from "./Services";
import ReviewComponent from "../components/Review";
import Clients from "../components/Client";
import Achievements from "../components/Achievements";
import Terms from "../components/Terms";

function Appbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Handles responsiveness

  function scrollToDiv(e) {
    const eleName = e.target.name.toLowerCase().replaceAll(" ", "");
    const elem = document.getElementsByClassName(`parentof${eleName}`)[0];
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {isSmallScreen ? (
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                spacing={1}
              >
                <Grid item>
                  <Grid container justifyContent="space-between" alignItems={"center"} marginTop={"10px"} spacing={2}>
                  <Typography variant="h5" className="headTitle">
                    SCRAP HARBOR
                  </Typography>
                  <Typography variant="body1" className="headerContact">
                    +91 84381 92377
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justifyContent="center" spacing={2}>
                    {["HOME", "SERVICES", "ACHIEVEMENTS", "TERMS AND CONDITION", "CONTACT US"].map(
                      (name) => (
                        <Grid item key={name}>
                          <BasicButton onClick={scrollToDiv} name={name} />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4" className="headTitle">
                    SCRAP HARBOR
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    {[
                      "HOME",
                      "SERVICES",
                      "ACHIEVEMENTS",
                      "TERMS AND CONDITION",
                      "CONTACT US"
                    ].map((name) => (
                      <Grid item key={name}>
                        <BasicButton onClick={scrollToDiv} name={name} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className="headerContact">
                    +91 84381 92377
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
        <Box mt={10}>
          <Grid container direction="column">
            <Grid item className="parentofhome">
              <ImageSlide />
            </Grid>
            <Grid item className="parentofservices">
              <Services />
            </Grid>
            <Grid item className="reviewWrapper">
              <ReviewComponent />
            </Grid>
            <Grid item className="parentofachievements">
              <Achievements />
            </Grid>
            <Grid item className="parentoftermsandcondition">
              <Terms />
            </Grid>
              <Grid item className="parentofcontactus">
              <Clients />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Appbar;
