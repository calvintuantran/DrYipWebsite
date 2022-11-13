import { Typography } from "@mui/material";

import Yip from "../images/Yip_Doctor.jpg";
import "../styling/About.css";

const About = () => {
  return (
    <>
      <div className="post_container ">
        <div className="leftContainer">
          <img src={Yip} alt="Dr. Yip" className="yip_photo" />
        </div>
        <div>
          <Typography className="title" variant="h4">
            Ian Yip, M.D. F.A.C.P.
          </Typography>
          <div className="underline" />
          <Typography sx={{ margin: "1rem 0" }}>
            Dr. Yip was raised in Hong Kong. He attended high school in Wah Yan
            College, Kowloon, Hong Kong.
          </Typography>
          <Typography sx={{ margin: "1rem 0" }}>
            Dr. Yip attended his undergraduate education at the Washington
            University in St. Louis. He graduated{" "}
            <span className="important">summa cum laude</span> with a major in
            Biology. Dr. Yip subsequently went on to medical school at the
            Washington University, School of Medicine and obtained his M.D.
            degree in 1990.
          </Typography>
          <Typography>
            After his medical school graduation, Dr. Yip moved to Los Angeles.
            He received his post-doctoral clinical residency training in
            Internal Medicine at the Greater Los Angeles Veteran Administration
            Medical Center; UCLA Medical Center; and Cedars-Sinai Medical
            Center. After he finished Internal Medicine training; he went on to
            obtain two additional subspecialty fellowship training in the areas
            of Endocrinology, Diabetes and Metabolism; and Clinical Nutrition.
            Dr. Yip received Specialty Board Certifications in all three of
            those areas.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default About;
