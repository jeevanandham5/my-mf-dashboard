import { Column } from "@ant-design/plots";
import React from "react";
import Styles from "../App.module.css";

export default function Columnbar({ data }) {
  const config = {
    data,
    xField: "type",
    yField: "value",
    style: {
      fill: ({ type }) => {
        if (type === "10-30分" || type === "30+分") {
          return "#22CBCC";
        }
        return "#2989FF";
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 8,
    },
    legend: true,
  };
  return (
    <div className={Styles.card}>
      <Column {...config} />
    </div>
  );
}
