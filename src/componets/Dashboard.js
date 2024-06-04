import React from "react";
import Styles from "../App.module.css";
import Rader from "../widgets/Radar";
import Mirrorchart from "../widgets/Mirrorchart";
import Columnbar from "../widgets/columnbar";
import Gradientchart from "../widgets/gradientchart";
import Linechart from "../widgets/linechart";
import PieChart from "../widgets/pieChart";
import Stackedchart from "../widgets/stackedchart";
import HomeNav from "../homenav";

export default function Dashboard({
  userName,
  mycount,
  setMycount,
  pagelocation,
}) {
  const data = [
    { type: "Task 1", value: 27 },
    { type: "Task 2", value: 25 },
    { type: "Task 3", value: 18 },
    { type: "Task 4", value: 15 },
    { type: "Task 5", value: 10 },
  ];
  console.log(pagelocation);
  return (
    <>
      <div className={Styles.grid_container}>
        <Rader />
        <Mirrorchart />
        <Stackedchart />
        <Columnbar data={data} />
        <Gradientchart />
        <PieChart data={data} />

        <Linechart />
        <Mirrorchart />
        <Columnbar data={data} />
        <Gradientchart />
        <PieChart data={data} />
      </div>
    </>
  );
}
