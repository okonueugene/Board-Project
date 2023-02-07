import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { red, blue, green, purple, orange, yellow } from "@mui/material/colors";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(...registerables, annotationPlugin);

function BarChart() {
  return (
    <Bar
      data={{
        labels: ["Joseph Ndungu", "Stephen Chege", "Benjamin Munuve"],
        datasets: [
          {
            label: "A3F",
            data: [90, 70, 80],
            backgroundColor: [blue[500]],
            borderWidth: 1,
          },
          {
            label: "TBA19",
            data: [50, 40, 60],
            backgroundColor: [orange[500]],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: true,

        scales: {
          y: {
            beginAtZero: true,
            steps: 10,
            max: 100,
          },
        },

        plugins: {
          annotation: {
            annotations: [
              {
                drawTime: "afterDraw",
                id: "a-line-1", 
                type: "line",
                mode: "horizontal",
                scaleID: "y",
                value: "90",
                borderColor: green[500],
                borderWidth: 1.5,
              },
            ],
          },
        },
      }}
      redraw={true}
    />
  );
}

export default BarChart;
