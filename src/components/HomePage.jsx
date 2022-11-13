//React Router
import { Link } from "react-router-dom";

import { Typography, Button } from "@mui/material";

// Components
import FeaturedPost from "./FeaturedPost.jsx";

// Images
import doctor from "../images/undraw_doctor_kw5l.png";

import "../styling/HomePage.css";
const HomePage = () => {
  return (
    <>
      <FeaturedPost />
      <div className="banner_container">
        <div className="right_container">
          <Typography variant="h4" >
            Get Care Now
          </Typography>
          <div className="underlineHome" />
          <Typography>$350 – for new patient consultation</Typography>
          <Typography sx={{ mb: "1rem" }}>
            $150 – for follow up visit
          </Typography>
          <Typography >
            Dr. Yip only accepts Medicare Insurance. For patients with private
            insurance, our office staff will assist you with filing an
            Out-of-Network claim form for your visit.
          </Typography>
          <Link
            to={`/about`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button variant="contained" size="large" sx={{ marginTop: "1rem" }}>
              Learn More!
            </Button>
          </Link>
        </div>
        <div className="left_container">
          <img src={doctor} alt="doctor" className="doctor_img" />
        </div>
      </div>
      {/* <div className="about_container">
        <div className="leftAboutContainer">
          <img src={YipPhoto} alt="Dr. Yip" className="blob" />
          <div className="secondaryblob" />
        </div>
        <div className="rightAboutContainer">
          <Typography className="title" variant="h4">
            Office Hours
          </Typography>
          <div className="underline" />
          <Typography className="text" sx={{ margin: "1rem 0" }}>
             HOURS HOURS HOURS
          </Typography>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
