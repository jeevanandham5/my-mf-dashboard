import React from "react";
import { Radar } from "@ant-design/plots";
import Styles from "../App.module.css";

const data = [
  { item: "Design", type: "a", score: 70 },
  { item: "Design", type: "b", score: 30 },
  { item: "Development", type: "a", score: 60 },
  { item: "Development", type: "b", score: 70 },
  { item: "Marketing", type: "a", score: 50 },
  { item: "Marketing", type: "b", score: 60 },
  { item: "Users", type: "a", score: 40 },
  { item: "Users", type: "b", score: 50 },
  { item: "Test", type: "a", score: 60 },
  { item: "Test", type: "b", score: 70 },
];

export default function Radarchart() {
  const config = {
    data,
    xField: "item",
    yField: "score",
    colorField: "type",
    shapeField: "smooth",
    area: {
      style: {
        fillOpacity: 0.5,
      },
    },
    scale: {
      x: { padding: 0.5, align: 0 },
      y: { tickCount: 5, domainMax: 80 },
    },
    axis: { x: { grid: true }, y: { zIndex: 1, title: false } },
    style: {
      lineWidth: 2,
    },
  };
  return (
    <div className={Styles.card}>
      <Radar {...config} />
    </div>
  );
}
