import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, Table, TableRow, TableBody, TableCell, TableHead, Link, Divider } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/default";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import { Link as GatsbyLink } from "gatsby";
import "./index.css";

const Layout: React.FC = ({ children }) => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const components = {
    h1: (props: any) => <Typography variant={"h1"} {...props} />,
    h2: (props: any) => <Typography variant={"h2"} {...props} />,
    h3: (props: any) => <Typography variant={"h3"} {...props} />,
    h4: (props: any) => <Typography variant={"h4"} {...props} />,
    h5: (props: any) => <Typography variant={"h5"} {...props} />,
    h6: (props: any) => <Typography variant={"h6"} {...props} />,
    Demo: (props: any) => <h1>This is a demo component</h1>,
    code: (props: any) => <CodeBlock darkMode={darkMode.value} {...props} />,
    thematicBreak: (props: any) => <Divider  {...props} />,
    a: (props: any) => <Link {...props} />,
    table: (props: any) => <Table {...props} />,
    thead: (props: any) => <TableHead {...props} />,
    tr: (props: any) => <TableRow {...props} />,
    tableBody: (props: any) => <TableBody {...props} />,
    td: (props: any) => {
      return (
        <TableCell>
          {props.children || ""}
        </TableCell>
      );
    },
  };

  return (
    <MDXProvider components={components}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky" color="default" elevation={0}>
          <Toolbar>
            <Grid container alignContent="center" alignItems="center" justify="space-between">
              <Typography variant="h6">
                <GatsbyLink to="/">
                  <Link>
                    Pristine
                  </Link>
                </GatsbyLink>
              </Typography>
              <Typography variant="caption">typescript-gatsby-react-material-ui</Typography>
              <Grid item>
                <Tooltip title={"Toggle Dark Mode"}>
                  <IconButton onClick={darkMode.toggle}>
                    {darkMode.value ? <Brightness3Icon /> : <WbSunnyIcon />}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div>
          <CssBaseline />
          <div style={{ padding: "30px" }}>
            {children}
          </div>
        </div>
      </MuiThemeProvider >
    </MDXProvider>
  );
};

export default Layout;
