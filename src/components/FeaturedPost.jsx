import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import Photo from "../images/IMG_2065.jpg";

import "../styling/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <Paper
          sx={{
            position: "relative",
            color: "#fff",
            backgroundSize: "cover",
            filter: "brightness(1.2)",
            backgroundPosition: "100% 35%",
            backgroundImage: `url(${Photo})`,
            m: "1rem",
            borderRadius: "25px",
            height: "55vh",
          }}
        >
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
                <Typography
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  sx={{ mb: "2rem" }}
                >
                  Welcome to Dr Yip's Office!
                </Typography>
                <div className="hoursBackground">
                  <Typography variant="h6">
                    Office Hours: Monday-Friday, 8:00 A.M. to 5:00 P.M.
                  </Typography>
                  <Typography variant="h6">
                    Clinic Hours: Monday-Wednesday, 8:00 A.M. to 5:00 P.M.
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default HomePage;
