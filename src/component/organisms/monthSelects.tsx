import React, { FC } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { weeks, Week } from "../../values/week";

type Props = {
  values: Week[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};
const MonthSelects: FC<Props> = ({ values, onChange }) => {
  return (
    <>
      {weeks.map((w) => (
        <FormControlLabel
          key={`month${w}`}
          control={
            <Checkbox
              checked={values.includes(w)}
              onChange={onChange}
              name="frequencyDetail"
              value={w}
            />
          }
          label={w}
        />
      ))}
    </>
  );
};

export { MonthSelects };
