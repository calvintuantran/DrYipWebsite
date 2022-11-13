import { Typography } from "@mui/material";

// Components
import Post from "./Post.jsx";

import Medications from "../medications.json";

const Medication = () => {
  return (
    <>
      <Typography variant="h3" className="title">
        Medication
      </Typography>
      <div className="underline" />
      {Medications.map((item) => {
        const { title, subtitle, description, link, image } = item;
        return (
          <Post
            key={item.title}
            title={title}
            subtitle={subtitle}
            description={description}
            image={image}
            link={link}
          />
        );
      })}
    </>
  );
};

export default Medication;
