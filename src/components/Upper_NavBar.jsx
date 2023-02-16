import "../styling/Navbar.css";

// MUI
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

// Icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EmailIcon from "@mui/icons-material/Email";

// Change font and font size?
const UpperNavBar = () => {
  return (
    <>
      <div className="Navbar_container">
        <div className="divider_sections">
          <EmailIcon className="iconStyling" />
          <Typography style={{ marginRight: "1rem" }}>
            ianyipmd@proton.me
          </Typography>
          <LocalPhoneIcon className="iconStyling" />
          <Typography style={{ marginRight: "1rem" }}>818-615-2888</Typography>
          <Typography>
            <span className="iconStyling">Fax:</span>
            818-615-2883
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="divider_sections">
          <MedicalServicesIcon className="iconStyling" />
          <Typography style={{ marginRight: "1rem" }}>
            <a
              href="http://maps.google.com/?q=6325 Topanga Canyon Blvd, Suite 315 Woodland Hills, CA 91367"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              6325 Topanga Canyon Blvd, Suite 315 Woodland Hills, CA 91367
            </a>
          </Typography>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default UpperNavBar;
