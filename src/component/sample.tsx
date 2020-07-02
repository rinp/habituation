import React, { FC } from "react";
// import { selector } from "recoil";
import { Data, Heads, List } from "./pages/List";
// import { firestore } from "../firebase";

export const sampleHeads: Heads = [
  { key: "name", label: "Dessert (100g serving)" },
  { key: "calories", label: "Calories" },
  { key: "fat", label: "Fat (g)" },
  { key: "carbs", label: "Carbs (g)" },
  { key: "protein", label: "Protein (g)" },
] as const;

interface DatE extends Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): DatE {
  return { name, calories, fat, carbs, protein };
}
const SampleList: FC = () => {
  const rows: DatE[] = [
    createData("C", 3, 3.7, 67, 4.3),
    createData("D", 42, 25.0, 51, 4.9),
    createData("E", 22, 16.0, 24, 6.0),
    createData("F", 19, 6.0, 24, 4.0),
    createData("G", 36, 16.0, 49, 3.9),
    createData("H", 48, 3.2, 87, 6.5),
    createData("I", 27, 9.0, 37, 4.3),
    createData("J", 35, 0.0, 94, 0.0),
    createData("K", 58, 26.0, 65, 7.0),
    createData("L", 32, 0.2, 98, 0.0),
    createData("M", 3, 0, 81, 2.0),
    createData("N", 30, 19.0, 9, 37.0),
    createData("O", 47, 18.0, 63, 4.0),
  ];
  return <List rows={rows} heads={sampleHeads} />;
};

export { SampleList };
