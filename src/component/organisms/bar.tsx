import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Box,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "@material-ui/icons";
import "../../utility/message";

const HeadBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box display="flex" m={1}>
          <Box mx={1}>
            <Link color="inherit" component={RouterLink} to="/">
              <Typography>top</Typography>
            </Link>
          </Box>
          <Box mx={1}>
            <Link color="inherit" component={RouterLink} to="/list">
              <Typography>list</Typography>
            </Link>
          </Box>
          <Box mx={1}>
            <Link color="inherit" component={RouterLink} to="/add">
              <Typography>add</Typography>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { HeadBar };
