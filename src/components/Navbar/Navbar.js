import { AppBar, Container, Link, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolBar}>
            <li className={classes.li}>
              <Link className={classes.link}>Home</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>About</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Portfolio</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Blog</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Contact</Link>
            </li>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
