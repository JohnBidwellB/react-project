import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};
export default Layout;
