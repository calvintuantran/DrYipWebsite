import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Images
import YipResearch from "../images/Yip Head Shot (2).jpg";

const useStyles = makeStyles({
  paragraph: {
    margin: "1rem 10%",
    display: "column",
    overflow: "hidden",
  },
});

const Research = () => {
  const classes = useStyles();

  return (
    <>
      <div className="post_container ">
        <div className="leftContainer">
          <img src={YipResearch} alt="Dr. Yip" className="yip_photo" />
        </div>
        <div>
          <Typography className="title" variant="h4">
            Early Research
          </Typography>
          <div className="underline" />
          <Typography sx={{ margin: "1rem 0" }}>
            In 1996, Dr. Yip joined the UCLA School of Medicine as an assistant
            clinical professor. During his early professorship, Dr. Yip’s
            research focus was in the area of Obesity, Diabetes, Nutrition and
            Cancer Prevention. Dr. Yip has studied the relationship between
            obesity, nutrition and prostate cancer prevention and progression.
            He was the first author in a review article published in the
            authoritative journal Urologic Clinic of North America entitled
            <span className="important">
              “Nutrition and Prostate cancer.” (1)
            </span>
            Dr. Yip was the first physician in the world to conduct a randomized
            clinical trial to examine whether red yeast rice as a dietary
            supplement could reduce cholesterol levels. The results of this
            influential clinic study was published in the
            <span className="important">
              “Cholesterol-lowering effects of a proprietary Chinese
              red-yeast-rice dietary supplement”
            </span>
            in the American Journal of Clinical Nutrition (2).
          </Typography>
        </div>
      </div>
      <div className={classes.paragraph}>
        <Typography>
          Dr. Yip was also a pioneer in the study of the relationship between
          type 2 diabetes and obesity, leading to the term “diabesity.” Dr. Yip
          applied his knowledge to manage his patients with type 2 diabetes
          using meal replacements. He published this innovative strategy in the
          Obesity Research in an article entitled,
          <span className="important">
            “Liquid Meal Replacement and Glycemic Control in Obese Type 2
            Diabetes” (3).
          </span>
        </Typography>
      </div>
      <Typography variant="h3" className="title">
        Recent Developments
      </Typography>
      <div className="underline" />
      <div className={classes.paragraph}>
        <Typography>
          Through Dr. Yip’s continual contribution to the mission of Research
          and Education, Dr. Yip was promoted to
          <span className="important">Clinical Professor of Medicine</span>at
          the David Geffen School of Medicine at UCLA in 2015. He has been
          giving lectures throughout the United States to clinicians and has
          served as visiting professor in many countries in South East Asia.
          Since the early 2000s, Dr. Yip has focused his clinical work on
          tackling the epidemic of obesity and type 2 diabetes. Dr. Yip
          maintains an active clinical practice in Woodland Hills where he is
          seeing patients Monday to Wednesday. Dr. Yip has given advice to
          clients from all over the country and has appeared on NBC, CBS, and
          Fox News.
        </Typography>
      </div>
      <Typography className="title" variant="h4">
        Research/Publications
      </Typography>
      <div className="underline" />
      <div className={classes.paragraph}>
        <ul>
          <li>
            <a href="http://www.sciencedirect.com/science/article/pii/S0094014305700793">
              http://www.sciencedirect.com/science/article/pii/S0094014305700793
            </a>
          </li>
          <li>
            <a href="http://ajcn.nutrition.org/content/69/2/231.full">
              http://ajcn.nutrition.org/content/69/2/231.full
            </a>
          </li>
          <li>
            <a href="http://onlinelibrary.wiley.com/doi/10.1038/oby.2001.140/abstract">
              http://onlinelibrary.wiley.com/doi/10.1038/oby.2001.140/abstract
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Research;
