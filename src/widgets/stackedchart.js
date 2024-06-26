import React from "react";
import { Area } from "@ant-design/plots";
import Styles from "../App.module.css";

export default function Stackedchart() {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json",
    },
    xField: (d) => new Date(d.year),
    yField: "revenue",
    seriesField: "format",
    colorField: "group",
    shapeField: "smooth",
    stack: {
      orderBy: "maxIndex",
      reverse: true,
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    tooltip: { channel: "y", valueFormatter: ".2f" },
    line: {
      stack: {
        orderBy: "maxIndex",
        reverse: true,
        y: "y1",
      },
      style: {
        stroke: "white",
      },
    },
  };
  return (
    <div className={Styles.card}>
      <Area {...config} />
    </div>
  );
}
