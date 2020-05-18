import React, { FC } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { DayOfWeek, dayOfWeeks, label } from "../../values/dayOfWeek";

type Props = {
  values: DayOfWeek[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};
const WeekSelects: FC<Props> = ({ values, onChange }) => {
  return (
    <>
      {dayOfWeeks.map((w) => (
        <FormControlLabel
          key={`week${w}`}
          control={
            <Checkbox
              checked={values.includes(w)}
              onChange={onChange}
              name="frequencyDetail"
              value={w}
            />
          }
          label={label(w)}
        />
      ))}
    </>
  );
};

export { WeekSelects };
