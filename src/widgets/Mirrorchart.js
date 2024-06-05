import React from "react";
import { Funnel } from "@ant-design/plots";
import Styles from "../App.module.css";

export default function MirrorChart() {
  const data = [
    { action: "Visit", visitors: 500, site: "Site 1" },
    { action: "Browse", visitors: 400, site: "Site 1" },
    { action: "Interact", visitors: 300, site: "Site 1" },
    { action: "Order", visitors: 200, site: "Site 1" },
    { action: "Complete", visitors: 100, site: "Site 1" },
    { action: "Visit", visitors: 550, site: "Site 2" },
    { action: "Browse", visitors: 420, site: "Site 2" },
    { action: "Interact", visitors: 280, site: "Site 2" },
    { action: "Order", visitors: 150, site: "Site 2" },
    { action: "Complete", visitors: 80, site: "Site 2" },
  ];

  const determinePosition = (item, values) => {
    if (item.site === "Site 2") {
      return values[0];
    }
    return values[1];
  };

  const config = {
    data,
    xField: "action",
    yField: "visitors",
    compareField: "site",
    style: {
      stroke: "#fff",
    },
    label: [
      {
        text: (d) => d.visitors,
        position: "inside",
        fontSize: 16,
      },
      {
        render: ($, _, i) => {
          if (i)
            return (
              <div
                style={{
                  height: 1,
                  width: 30,
                  background: "#aaa",
                  marginLeft: _.site === "Site 2" ? -30 : 0,
                }}
              ></div>
            );
        },
        position: (item) => determinePosition(item, ["top-left", "top-right"]),
      },
      {
        text: (currentDataPoint, index, allDataPoints) => {
          if (index)
            return (
              (
                (currentDataPoint.visitors /
                  allDataPoints[index - 1].visitors) *
                100
              ).toFixed(2) + "%"
            );
        },
        position: (item) => determinePosition(item, ["top-left", "top-right"]),
        textAlign: (item) => determinePosition(item, ["right", "left"]),
        textBaseline: "middle",
        dx: (item) => determinePosition(item, [-40, 40]),
      },
    ],
    legend: false,
  };

  return (
    <div className={Styles.card}>
      <Funnel {...config} />
    </div>
  );
}
