import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Grid, useTheme, Box } from "@material-ui/core";
import { useRecoilState } from "recoil";
// import { useTranslation } from "react-i18next";
import { Login } from "./Login";
import { SampleList } from "./component/sample";
import { HeadBar } from "./component/organisms/bar";
import { AddPage } from "./component/input";
import { firestore } from "./firebase";
// import { Habituation, habituationsState, langState } from "./data";
import { Habituation, habituationsState } from "./data";

const App = () => {
  const theme = useTheme();
  const [habituations, setHabituations] = useRecoilState(habituationsState);

  // const [_, i18n] = useTranslation();
  // const [lang, setLang] = useRecoilState(langState);

  useEffect(
    () => {
      firestore.collection("habituations").onSnapshot((snapshot) => {
        // const { docs } = snapshot;
        // as Habituation[];
        // setHabituations(docs);
        snapshot.docChanges().forEach((change) => {
          const { doc } = change;
          if (change.type === "added") {
            console.log("add: ", doc.id, doc.data());
            console.log("before:", habituations);

            setHabituations((cul) => [...cul, doc.data() as Habituation]);
          }
          if (change.type === "modified") {
            console.log("Modified : ", doc.id, doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed : ", doc.id, doc.data());
          }
        });
      });
    },
    // mount時のみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <BrowserRouter>
        <Grid container direction="column">
          <Grid item>
            <HeadBar />
          </Grid>
          <Grid item>
            <Box m={theme.spacing(1)}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/list" component={SampleList} />
                <Route path="/add" component={AddPage} />
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </BrowserRouter>
      <div>{`${JSON.stringify(habituations)}`}</div>
    </>
  );
};

export { App };
