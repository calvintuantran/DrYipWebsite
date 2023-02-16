import Typography from "@mui/material/Typography";

// Icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EmailIcon from "@mui/icons-material/Email";

const MobileNavBar = () => {
  return (
    <div className="mobileNavBarContainer">
      <div className="displayflex">
        <EmailIcon className="iconStyling" />
        <Typography>ianyipmd@proton.me</Typography>
      </div>
      <div className="displayflex">
        <LocalPhoneIcon className="iconStyling" />
        <Typography>818-615-2888</Typography>
      </div>
      <div className="displayflex marginLeftRight">
        <MedicalServicesIcon className="iconStyling" />
        <Typography>
          6325 Topanga Canyon Blvd, Suite 315 Woodland Hills, CA 91367
        </Typography>
      </div>
    </div>
  );
};

export default MobileNavBar;
