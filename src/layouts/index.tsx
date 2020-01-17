import React, { useState } from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, Table, TableRow, TableBody, TableCell, TableHead, Link, Divider, Drawer } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/default";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Sidebar from "../components/Sidebar";
import "./index.css";

const Layout: React.FC = ({ children }) => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const components = {
    h1: (props: any) => <Typography variant={"h1"} {...props} gutterBottom={true} />,
    h2: (props: any) => <Typography variant={"h2"} {...props} gutterBottom={true} />,
    h3: (props: any) => <Typography variant={"h3"} {...props} gutterBottom={true} />,
    h4: (props: any) => <Typography variant={"h4"} {...props} gutterBottom={true} />,
    h5: (props: any) => <Typography variant={"h5"} {...props} gutterBottom={true} />,
    h6: (props: any) => <Typography variant={"h6"} {...props} gutterBottom={true} />,
    Demo: (props: any) => <h1>This is a demo component</h1>,
    code: (props: any) => <CodeBlock darkMode={darkMode.value} {...props} />,
    thematicBreak: (props: any) => <Divider  {...props} />,
    a: (props: any) => <Link {...props} />,
    table: (props: any) => <Table {...props} style={{ marginBottom: "15px", ...props.style }} />,
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
  const [open, setOpen] = useState();

  const data = useStaticQuery(graphql`
    query LayouQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <MDXProvider components={components}>
      <MuiThemeProvider theme={theme}>
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <AppBar position="fixed" color="default" elevation={0}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Grid container alignContent="center" alignItems="center" justify="space-between">
              <GatsbyLink to="/" style={{ textDecoration: "none" }}>
                <Typography color="textSecondary" variant="h6">
                  {data.site.siteMetadata.title}
                </Typography>
              </GatsbyLink>
              <Typography variant="caption">{data.site.siteMetadata.description}</Typography>
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
          <div style={{ padding: "30px", paddingTop: "64px" }}>
            {children}
          </div>
        </div>
      </MuiThemeProvider >
    </MDXProvider >
  );
};

export default Layout;
