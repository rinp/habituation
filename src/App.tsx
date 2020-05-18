import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Grid, useTheme, Box } from "@material-ui/core";
import { Login } from "./Login";
import { SampleList } from "./component/sample";
import { HeadBar } from "./component/bar";
import { AddPage } from "./component/input";

const App = () => {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item>
          <HeadBar />
        </Grid>
        <Grid item>
          <Box m={theme.spacing(1)}>
            <Switch>
              <Route exact path="/" component={Login} />{" "}
              <Route path="/list" component={SampleList} />
              <Route path="/add" component={AddPage} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export { App };
