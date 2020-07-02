import { setLocale } from "yup";
// export interface LocaleObject {
//   mixed?: MixedLocale;
//   string?: StringLocale;
//   number?: NumberLocale;
//   date?: DateLocale;
//   boolean?: {};
//   object?: ObjectLocale;
//   array?: ArrayLocale;
// }

// label: Yup.string().min(2).max(100).required(),
// frequency: Yup.string().min(2).max(100).required(),
// frequencyDetail: Yup.array().min(1).required(),

/* eslint-disable no-template-curly-in-string */
setLocale({
  mixed: {
    required: "必ず入力してください。",
  },
  string: {
    min: "${min}文字以上で入力してください。",
    max: "${max}文字以下で入力してください。",
  },
  array: {},
});
/* eslint-enable no-template-curly-in-string */
