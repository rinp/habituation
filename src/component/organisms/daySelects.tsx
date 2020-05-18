import React, { FC } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

type Props = {
  values: number[];
  onChange: (eventOrPath: string | React.ChangeEvent<unknown>) => void;
};
const DaySelects: FC<Props> = ({ values, onChange }) => {
  return (
    <>
      {Array.from(Array(24).keys()).map((i) => (
        <FormControlLabel
          key={`day${i}`}
          control={
            <Checkbox
              checked={values.includes(i)}
              onChange={onChange}
              name="frequencyDetail"
              value={i}
            />
          }
          label={`${i}時${values} ${values.includes(i)} `}
        />
      ))}
    </>
  );
};

export { DaySelects };
