import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

var contents = {
  0:"Revolutionize waste management with our scrap collection service! We pick up scrap from homes, industries, schools, and colleges, ensuring responsible disposal. Our efficient team seamlessly transports materials to scrap dealers, promoting a cleaner environment. Choose us for a greener, sustainable future!",
  1:"Bridging the gap in the scrap industry! We connect local scrap dealers with wholesale buyers, fostering a seamless exchange of materials. Our platform simplifies transactions, ensuring a swift and efficient link between sellers and bulk purchasers. Elevate your scrap business with our strategic connections.",
  2:"Catalyzing industrial sustainability! We serve as the crucial link between wholesale scrap dealers and manufacturing industries that thrive on recycled materials. Streamlining the supply chain, we ensure a reliable flow of scrap to meet manufacturing demands. Elevate your production processes with our efficient link between wholesale scrap and manufacturing excellence."
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ServiceGrid = (props, ref) => {
  const [expanded, setExpanded] = React.useState(false);
  const [content, setContent] = React.useState(contents);

  const handleExpandClick = () => {
    console.log("dsfdf",props)
    setExpanded(!expanded);
  };
  console.log(props)
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      marginBottom: '2rem' 
    }}>
      <Grid container justifyContent={"center"} sx={{ flexGrow: 1 }}>
        <CardContent className="CardContent">
          <Grid>
            <Grid container justifyContent={"center"}>
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                justifyItems={"center"}
                style={{fontWeight:"bold"}}
                className="serviceTitle"
              >
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={"serviceImg"+" box"+props.serId+"boxClass"}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                maxHeight: { xs: 333, md: 267 },
                maxWidth: { xs: "100%", md: "100%" },
              }}
              alt="The house from the offer."
              src={props.img}
            />
          </Grid>
          {/* <Grid item>
            <Typography variant="body2" m={5}>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </Grid> */}
          <Grid item className="serviceCardContent">
            <Collapse in={true} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {expanded?contents[props.serId]:contents[props.serId].slice(0,130)+"..."}
                </Typography>
              </CardContent>
            </Collapse>
          </Grid>
        </CardContent>
      </Grid>
      <CardActions>
        <Grid container justifyContent={"center"}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {expanded ? (
              <Button className="cardActionButton" size="small">
                Show Less
              </Button>
            ) : (
              <Button className="cardActionButton" size="small">
                Learn More
              </Button>
            )}
          </ExpandMore>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default ServiceGrid;

