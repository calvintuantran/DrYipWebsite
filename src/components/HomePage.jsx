//React Router
import { Typography } from "@mui/material";

// Components
import FeaturedPost from "./FeaturedPost.jsx";

// Images
import yipProfessional from "../images/Yip PR Headshot.jpg";

// Helpers
import { IsMobile } from "../isMobile";

import "../styling/HomePage.css";
const HomePage = () => {
  const isMobile = IsMobile();
  let mobileFont = isMobile ? "h5" : "h4";

  return (
    <>
      <FeaturedPost />
      <div className="banner_container">
        <div className="left_container ">
          <Typography variant={mobileFont}>
            Office Hours: Monday - Friday, 8:00 AM to 5:00 PM
          </Typography>
          <div
            className="underlineHome"
            style={{ position: "relative", left: "25%", margin: "1.5rem 0" }}
          />

          <Typography variant="h4">New Patient Information</Typography>

          <Typography variant="h6">$350 – New Patient Consultation </Typography>
          <Typography sx={{ mb: "1rem" }} variant="h6">
            $150 – Follow-Up Visit
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", mb: "1`rem" }}>
            Dr. Yip does not accept commercial insurance and only accepts
            Medicare PPO. Patients with private insurance can request a
            superbill (itemized receipt) for their visit. It is the patient’s
            responsibility to submit the superbill to their insurance and our
            office does not guarantee reimbursement.
          </Typography>
        </div>
        <div className="right_container">
          <img src={yipProfessional} alt="Dr. Yip" className="yip_photo" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
