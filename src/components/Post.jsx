import React from "react";
import { Typography } from "@mui/material";
import "../styling/Medications.css";

const Post = (props) => {
  const { title, subtitle, description, link, image } = props;
  return (
    <>
      <div className="post_container ">
        <a href={`${link}`}>
          <div className="leftContainer">
            <img src={image} alt="Medication Photos" className="Medication_photo" />
          </div>
        </a>
        <div>
          <Typography className="title" variant="h4">
            {title}
          </Typography>
          <div className="underline" />
          <Typography className="title italize" variant="h5">
            {subtitle}
          </Typography>
          <Typography sx={{ margin: "1rem 0" }} variant="body1">
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Post;
