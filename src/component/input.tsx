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
  // useStyle,
} from "@material-ui/core";
import { WeekSelects } from "./organisms/weekSelects";
import { DaySelects } from "./organisms/daySelects";
import { DayOfWeek } from "../values/dayOfWeek";
import { Week } from "../values/week";
import { MonthSelects } from "./organisms/monthSelects";

const boxCss = {
  borderColor: "grey.A200",
  p: 1,
  border: 1,
  borderRadius: "borderRadius",
};

type Value = {
  label: "";
  ret: "";
} & (
  | {
      frequency: "day";
      frequencyDetail: number[];
    }
  | {
      frequency: "week";
      frequencyDetail: DayOfWeek[];
    }
  | {
      frequency: "month";
      frequencyDetail: Week[];
    }
  | {
      frequency: "";
      frequencyDetail: unknown[];
    }
);

const AddPage: FC = () => {
  const formik = useFormik<Value>({
    initialValues: {
      label: "",
      frequency: "",
      frequencyDetail: [],
      ret: "",
    },
    onSubmit: (values) => {
      //
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormLabel htmlFor="label" required>
              日課
            </FormLabel>
            <TextField
              helperText="表示項目のためわかりやすい名前をつけてください"
              id="label"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.label}
            />
          </Grid>
          <Grid item lg={3} xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="frequency" required>
                頻度
              </FormLabel>
              <Select
                value={formik.values.frequency}
                onChange={formik.handleChange}
                id="frequency"
                // fullWidth
                native
              >
                <option aria-label="None" value="" />
                <option value="month">月</option>
                <option value="week">週</option>
                <option value="day">日</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={9} xs={12}>
            <FormControl component="fieldset" variant="outlined">
              <FormLabel component="legend" required>
                頻度詳細
              </FormLabel>
              <Box {...boxCss}>
                <FormGroup>
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
            </FormControl>
          </Grid>
          <Grid item>
            <button type="submit">Submit</button>
            <p>{JSON.stringify(formik.values, null, 2)}</p>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export { AddPage };
