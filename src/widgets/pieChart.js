import React from "react";
import { Pie } from "@ant-design/plots";
import Styles from "../App.module.css";

const PieChart = ({ data }) => {
  const config = {
    data,
    angleField: "value",
    colorField: "type",
    paddingRight: 80,
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "left",
        rowPadding: 4,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "Task",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 15,
          fontStyle: "bold",
        },
      },
    ],
  };

  return (
    <div className={Styles.card}>
      <Pie {...config} />
    </div>
  );
};

export default PieChart;
