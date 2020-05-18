const dayOfWeeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export type DayOfWeek = typeof dayOfWeeks[number];
const weekLabels = ["月", "火", "水", "木", "金", "土", "日"].map(
  (s) => `${s}曜日`
);
const label = (week: DayOfWeek) => weekLabels[dayOfWeeks.indexOf(week)];

export { dayOfWeeks, label };
