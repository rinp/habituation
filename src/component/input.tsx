import React, { FC } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  Select,
  FormLabel,
  TextField,
  FormGroup,
  Grid,
  Box,
  BoxProps,
  Button,
  FormHelperText,
  // useStyle,
} from "@material-ui/core";
import * as Yup from "yup";
import { SaveTwoTone } from "@material-ui/icons";
import { WeekSelects } from "./organisms/weekSelects";
import { DaySelects } from "./organisms/daySelects";
import { MonthSelects } from "./organisms/monthSelects";
import { firestore } from "../firebase";
import { InputHabituation } from "../data";

const boxCss: BoxProps = {
  borderColor: "grey.A200",
  pt: 1,
  pl: 1,
  p: 0.5,
  border: 1,
  borderRadius: "borderRadius",
  minHeight: "56px",
};

const validationSchema = Yup.object().shape({
  label: Yup.string().min(2).max(100).required(),
  frequency: Yup.string().required(),
  frequencyDetail: Yup.array().when("frequency", {
    is: (value: "day" | "week" | "month" | "" | undefined) => {
      return (value?.length ?? 0) > 0;
    },
    then: Yup.array().min(1, "1つ以上選択してください。").required(),
  }),
});

const AddPage: FC = () => {
  const formik = useFormik<InputHabituation>({
    initialValues: {
      label: "",
      frequency: "",
      frequencyDetail: [],
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      await firestore.collection("habituations").add(values);
    },
  });
  const changeFrequency = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    formik.setFieldValue("frequencyDetail", [], false);
    formik.handleChange(event);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormLabel
              htmlFor="label"
              filled
              required
              error={!!formik.touched.label && !!formik.errors.label}
            >
              日課
            </FormLabel>
            <TextField
              helperText={formik.errors.label}
              id="label"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.label}
              error={formik.touched.label && !!formik.errors.label}
            />
            <FormHelperText variant="filled">
              表示項目のためわかりやすい名前をつけてください
            </FormHelperText>
          </Grid>
          <Grid item md={3} xs={12}>
            <FormControl fullWidth>
              <FormLabel
                htmlFor="frequency"
                required
                error={formik.touched.frequency && !!formik.errors.frequency}
              >
                頻度
              </FormLabel>
              <Select
                value={formik.values.frequency}
                onChange={changeFrequency}
                id="frequency"
                error={formik.touched.frequency && !!formik.errors.frequency}
                native
              >
                <option aria-label="None" value="" />
                <option value="month">月</option>
                <option value="week">週</option>
                <option value="day">日</option>
              </Select>
              {formik.touched.frequency && !!formik.errors.frequency && (
                <FormHelperText error variant="filled">
                  {formik.errors.frequency}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={9} xs={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel
                component="legend"
                required
                error={
                  formik.touched.frequencyDetail &&
                  !!formik.errors.frequencyDetail
                }
              >
                頻度詳細
              </FormLabel>
              <Box
                {...boxCss}
                borderColor={
                  formik.touched.frequencyDetail &&
                  !!formik.errors.frequencyDetail
                    ? "error.main"
                    : "grey.A200"
                }
              >
                <FormGroup row>
                  {formik.values.frequency === "month" && (
                    <MonthSelects
                      values={formik.values.frequencyDetail}
                      onChange={formik.handleChange}
                    />
                  )}
                  {formik.values.frequency === "week" && (
                    <WeekSelects
                      values={formik.values.frequencyDetail}
                      onChange={formik.handleChange}
                    />
                  )}
                  {formik.values.frequency === "day" && (
                    <DaySelects
                      values={formik.values.frequencyDetail}
                      onChange={formik.handleChange}
                    />
                  )}
                </FormGroup>
              </Box>
              {!!formik.touched.frequencyDetail &&
                !!formik.errors.frequencyDetail && (
                  <FormHelperText error variant="filled">
                    {formik.errors.frequencyDetail}
                  </FormHelperText>
                )}
            </FormControl>
          </Grid>
          <Grid item>
            <Button color="primary" startIcon={<SaveTwoTone />} type="submit">
              登録
            </Button>
            <p>{JSON.stringify(formik.values, null, 2)}</p>
            <p>{formik.errors.label}</p>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export { AddPage };
