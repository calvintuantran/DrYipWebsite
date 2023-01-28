//React Router
import { Typography } from "@mui/material";

// Components
import FeaturedPost from "./FeaturedPost.jsx";

// Images
import yipProfessional from "../images/Yip PR Headshot.jpg";

import "../styling/HomePage.css";
const HomePage = () => {
  return (
    <>
      <FeaturedPost />
      <div className="banner_container">
        <div className="right_container">
          <Typography variant="h4">New Patient Information</Typography>
          <div
            className="underlineHome"
            style={{ position: "relative", left: "3rem" }}
          />
          <Typography>$350 – New Patient Consultation </Typography>
          <Typography sx={{ mb: "1rem" }}>$150 – Follow-Up Visit</Typography>
          <Typography>
            Dr. Yip does not accept commercial insurance and only accepts
            Medicare PPO. Patients with private insurance can request a
            superbill (itemized receipt) for their visit. It is the patient’s
            responsibility to submit the superbill to their insurance and our
            office does not guarantee reimbursement.
          </Typography>
        </div>
        <div className="leftContainer">
          <img
            src={yipProfessional}
            alt="Dr. Yip"
            className="yip_photo"
            style={{ maxWidth: "42%", position: "relative", left: "3rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
