import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, googleAuthProvider } from "./firebase";

type Input = {
  input: string;
};
const validationSchema = Yup.object().shape({
  input: Yup.string().min(2).max(100).required(),
});
const Login = () => {
  const formik = useFormik<Input>({
    initialValues: {
      input: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {
      auth
        .signInWithPopup(googleAuthProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = result?.credential;
          console.log(credential?.toJSON());
          // The signed-in user info.
          const { user } = result;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The firebase.auth.AuthCredential type that was used.
          const { credential } = error;
          console.log(errorCode, errorMessage, credential?.toJSON());
          // ...
        });
      //
    },
  });
  return (
    <Grid container>
      <Grid>
        <form onSubmit={formik.handleSubmit}>
          <p>test login</p>
          <TextField
            helperText={formik.errors.input}
            id="input"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.input}
            error={formik.touched.input && !!formik.errors.input}
          />
          {/* <input type="text" name="id" />
          <input type="password" name="password" /> */}
          <button type="submit">ログイン</button>
        </form>
      </Grid>
      <Grid />
    </Grid>
  );
};
export { Login };
