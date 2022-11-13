import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paragraph: {
    margin: "1rem 10%",
  },
});

const Research = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className="title">
        Early Research Career
      </Typography>
      <div className="underline" />
      <div className={classes.paragraph}>
        <Typography>
          In 1996, Dr. Yip joined the UCLA School of Medicine as Assistant
          Clinical Professor. During his early professorship, Dr. Yip’s research
          focus has been in the area of Obesity, Diabetes, Nutrition and Cancer
          Prevention. Dr. Yip has studied the relationship between obesity,
          nutrition and prostate cancer prevention and progression. He was the
          first author in a review article published in the authoritative
          journal Urologic Clinic of North America entitled,
          <span className="important">
            “Nutrition and Prostate cancer.” (reference *1)
          </span>{" "}
          Dr. Yip was the first physician in the world who had conducted a
          randomized clinical trial to examine whether “Red Yeast Rice” as a
          dietary supplement could reduce cholesterol levels.
        </Typography>
      </div>
      <div className={classes.paragraph}>
        {" "}
        <Typography>
          The results of this influential clinic study was published in the{" "}
          <span className="important">
            American Journal of Clinical Nutrition. (reference *2)
          </span>{" "}
          Dr. Yip is also a pioneer in the study of the relationship between
          type 2 Diabetes and Obesity, and hence the term “Diabesity” was
          created. Dr. Yip applied his knowledge to manage his patients with
          type 2 Diabetes using Meal Replacement strategy. He published this
          innovative strategy in the journal Obesity Research entitled,{" "}
          <span className="important">
            “Liquid Meal Replacement and Glycemic Control in Obese Type 2
            Diabetes.” (reference *3)
          </span>
        </Typography>
      </div>
      <Typography variant="h3" className="title">
        Recent Development
      </Typography>
      <div className="underline" />
      <div className={classes.paragraph}>
        <Typography>
          Through Dr. Yip’s continual contribution to the mission of Research
          and Education, Dr. Yip was promoted to rank of{" "}
          <span className="important">Clinical Professor of Medicine</span> at
          the David Geffen School of Medicine at UCLA in 2015. He has been
          giving lectures throughout the United States to clinicians in the area
          Obesity and Diabetes. He was also served as visiting Professor in many
          countries in South East Asia. Since the early 2000, Dr. Yip has
          focused his clinical work on tackling the epidemic of Obesity and type
          2 Diabetes. Dr. Yip maintains an active clinical practice in Woodland
          Hills where he is seeing patients Monday to Wednesday. Dr. Yip’s
          expertise is in the clinical management of diabetes and obesity. Dr.
          Yip has given advices to clients from all over the country. Dr. Yip
          has appeared on NBC, CBS, Fox-news.
        </Typography>
      </div>
      <Typography className="title" variant="h4">
        Research/Publications 
      </Typography>
      <div className="underline" />
      <div className={classes.paragraph}>
        <Typography>
          (1) http://www.sciencedirect.com/science/article/pii/S0094014305700793
        </Typography>
        <Typography>
          (2) http://ajcn.nutrition.org/content/69/2/231.full
        </Typography>
        <Typography>
          (3) http://onlinelibrary.wiley.com/doi/10.1038/oby.2001.140/abstract
        </Typography>
      </div>
    </>
  );
};

export default Research;
