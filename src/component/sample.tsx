import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { Heads, List, Data } from "./pages/List";
import { habituationsState, Habituation } from "../data";
// import { firestore } from "../firebase";

export const heads: Heads = [
  { key: "label", label: "日課" },
  { key: "frequency", label: "頻度" },
  { key: "frequencyDetail", label: "頻度詳細" },
  { key: "results", label: "実績" },
] as const;

// interface DatE extends Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

const SampleList: FC = () => {
  const { t } = useTranslation();
  const habituations: Habituation[] = useRecoilValue(habituationsState);

  function toListProps(habituation: Habituation): Data {
    const { label } = habituation;
    const frequency = t(habituation.frequency);
    const frequencyDetail = t(habituation.frequencyDetail.join(","));
    return { label, frequency, frequencyDetail };
  }

  const list = habituations.map(toListProps);
  return <List rows={list} heads={heads} />;
};

export { SampleList };
