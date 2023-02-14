import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import Photo from "../images/IMG_2065.jpg";

import { makeStyles } from "@mui/styles";

import "../styling/HomePage.css";

const useStyles = makeStyles((theme) => {
  return {
    featuredPhoto: {
      position: "relative",
      color: "#fff",
      backgroundSize: "cover",
      filter: "brightness(1.2)",
      backgroundPosition: "100% 35%",
      backgroundImage: `url(${Photo})`,
      borderRadius: "25px",
      m: "1rem",
      height: "55vh",
      [theme.breakpoints.down("md")]: {
        backgroundPosition: "40%",
        height: "40vh",
      },
    },
  };
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <div className="HomePage">
        <Paper sx={{ borderRadius: "25px" }} className={classes.featuredPhoto}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
              borderRadius: "25px",
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                }}
              >
                <Typography variant="h3" color="white" gutterBottom>
                  Welcome to Dr Yip's Office!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default HomePage;
