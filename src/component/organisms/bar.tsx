import React, { ChangeEventHandler } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Box,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "@material-ui/icons";
import "../../utility/message";
import { useTranslation } from "react-i18next";

const HeadBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation();
  const changeLang: ChangeEventHandler<{ value: unknown }> = (e) => {
    i18n.changeLanguage(e.target.value as string);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box display="flex" alignItems="center" flexGrow={1} m={1}>
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
          <Box mx={1} flexGrow={1}>
            <Link color="inherit" component={RouterLink} to="/add">
              <Typography>add</Typography>
            </Link>
          </Box>
          <Box marginLeft="auto">
            <Select onChange={changeLang} value={i18n.language}>
              <MenuItem value="ja">日本語</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
            {i18n.language}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { HeadBar };
