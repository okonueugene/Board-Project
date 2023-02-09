import React, { useState, Fragment, useEffect } from 'react';
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { red, blue, green, teal, orange, yellow } from "@mui/material/colors";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(...registerables, annotationPlugin);

var mqtt    = require('mqtt');
var options = {
  protocol: 'mqtts',
  clientId: 'b0908853' 	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

client.subscribe('testing');

function BarChart() {
  var note;

  const [mesg, setMesg] = useState(<Fragment><em>nothing heard</em></Fragment>);

  useEffect(() => {
    client.on('message', function (topic, message) {
      note = message.toString();
      setMesg(note);
      console.log(note);
    });
  }, []);


  return (
    <Bar
      data={{
        labels: ["Joseph Ndungu", "Stephen Chege", "Benjamin Munuve"],
        datasets: [
          {
            label: "A3F",
            data: [90, mesg, 80],
            backgroundColor: [blue[500]],
            borderWidth: 1,
          },
          {
            label: "TBA19",
            data: [78, 80, 60],
            backgroundColor: [orange[500]],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: true,

        scales: {
          y: {
            beginAtZero: true,
            steps: 10,
            max: 100,
          },
          x: {
            barThickness: 1,
          },
        },

        plugins: {
            title: {
                display: true,
                text: new Date().toDateString(),
                color: teal[500],
                font: {
                    size: 15,
                    weight: "bold",
                },
            },
            

          annotation: {
            annotations: [
              {
                drawTime: "afterDraw",
                type: "line",
                mode: "horizontal",
                scaleID: "y",
                value: "90",
                borderColor: green[500],
                borderWidth: 1.5,
                label: {
                    display: true,
                    borderRadius: 0,
                    padding: 2,
                    backgroundColor: green[500],
                    content: "Target ",
                    position: "end",
                    yAdjust: -10,

                },
              },
            ],
          },
        },
      }}
      redraw={false}
    />
  );
}

export default BarChart;
