import React, { FC } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { hours, Hour } from "../../values/hour";

type Props = {
  values: Hour[];
  onChange: (eventOrPath: string | React.ChangeEvent<unknown>) => void;
};
const DaySelects: FC<Props> = ({ values, onChange }) => {
  return (
    <>
      {hours.map((h) => (
        <FormControlLabel
          key={h}
          control={
            <Checkbox
              checked={values.includes(h)}
              onChange={onChange}
              name="frequencyDetail"
              value={h}
            />
          }
          label={h}
        />
      ))}
    </>
  );
};

export { DaySelects };
