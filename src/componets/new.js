import React from "react";
import { Line } from "react-chartjs-2";

export default function New() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Example Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} />
    </div>
  );
}
