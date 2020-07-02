import { atom } from "recoil";
import { Hour } from "../values/hour";
import { DayOfWeek } from "../values/dayOfWeek";
import { Week } from "../values/week";

export type Habituation = {
  label: string;
} & (
  | {
      frequency: "day";
      frequencyDetail: Hour[];
    }
  | {
      frequency: "week";
      frequencyDetail: DayOfWeek[];
    }
  | {
      frequency: "month";
      frequencyDetail: Week[];
    }
);

export type InputHabituation = {
  label: "";
} & (
  | {
      frequency: "day";
      frequencyDetail: Hour[];
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

export const habituationsState = atom<Habituation[]>({
  key: "habituations",
  default: [],
});
