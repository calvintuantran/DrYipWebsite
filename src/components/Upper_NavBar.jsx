import "../styling/Navbar.css";

// MUI
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

// Icon
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EmailIcon from "@mui/icons-material/Email";

// Change font and font size?
const UpperNavBar = () => {
  return (
    <>
      <div className="Navbar_container">
        <div className="divider_sections">
          <Typography> Book by Phone or Email</Typography>
          <ArrowRightAltIcon style={{ color: "#3388ff" }} />
          <EmailIcon className="iconStyling" />
          <Typography style={{ marginRight: "1rem" }}>
            Nutritionmedcenter@yahoo.com
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
            6325 Topanga Canyon Suite 315, Woodland Hills 91367
          </Typography>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default UpperNavBar;
