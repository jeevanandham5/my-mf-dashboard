import React from "react";
import { Area } from "@ant-design/plots";
import Styles from "../App.module.css";

export default function Gradientchart() {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    xField: (d) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, white 0%, #61DDAA 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "#2C87C6",
        strokeWidth: 2,
      },
    },
  };
  return (
    <div className={Styles.card}>
      <Area {...config} />
    </div>
  );
}
