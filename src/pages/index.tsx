import React from "react";
import useDarkMode from "use-dark-mode";
import { Typography, Grid } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <GatsbyLink to={"/page-2"}>
          <Link>
            Go To Page 2
          </Link>
        </GatsbyLink>
        <img className="logo" alt="logo" src={darkMode.value
          ? "https://github.com/etclabscore/pristine-media-assets/blob/master/pristine-logo-dark/pristine-logo-dark%20(PNG)/256x256.png?raw=true" //tslint:disable-line
          : "https://github.com/etclabscore/pristine-media-assets/blob/master/pristine-logo/pristine-logo%20(PNG)/256x256.png?raw=true" //tslint:disable-line
        } style={{ paddingTop: "10%" }} />
      </Grid>
    </>
  );
};

export default MyApp;
