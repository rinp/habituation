import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Grid, useTheme, Box } from "@material-ui/core";
import { useRecoilState } from "recoil";
// import { useTranslation } from "react-i18next";
import { Login } from "./Login";
import { SampleList } from "./component/sample";
import { HeadBar } from "./component/organisms/bar";
import { AddPage } from "./component/input";
import { firestore, auth } from "./firebase";
// import { Habituation, habituationsState, langState } from "./data";
import { Habituation, habituationsState } from "./data";

const App = () => {
  const theme = useTheme();
  const [habituations, setHabituations] = useRecoilState(habituationsState);

  // const [_, i18n] = useTranslation();
  // const [lang, setLang] = useRecoilState(langState);
  const habituationsLog = () => {
    firestore.collection("hations").onSnapshot((snapshot) => {
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
  };
  const userInfo = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        // User is signed in.
      } else {
        console.log("logout");
        // No user is signed in.
      }
    });
  };

  useEffect(
    () => {
      habituationsLog();
      userInfo();
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
