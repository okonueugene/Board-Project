
import React, { useState, Fragment, useEffect } from 'react';
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { red, blue, green, teal, orange, yellow } from "@mui/material/colors";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(...registerables, annotationPlugin);

var mqtt    = require('mqtt');
var options = {
  protocol: 'mqtts',
  clientId: 'b0908853', 
  useSSL: true	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

client.subscribe('dailylineefficiencykpi');

function BarChart() {
  var note;

  const [mesg, setMesg] = useState(null);

  useEffect(() => {
    client.on('message', function (topic, message) {
      note = JSON.parse(message.toString()); // convert message to JSON
      setMesg([note[0], note[1], note[2], note[3], note[4], note[5], note[6], note[7]]);
    });
  }, []);

  if(!mesg || mesg.length === 0) {return <div className='text-center' style={{position:"relative",top:"40%"}}>Loading...</div>;}

  let labels = mesg[6].split(",");
  let machines = mesg[7].split(",");
  
  // Create an array of data for each machine
  const machineData = [];
  for (let i = 0; i < machines.length; i++) {
    const data = [mesg[i*3], mesg[i*3+1], mesg[i*3+2]];
    const backgroundColor = [red[500], blue[500], green[500]][i % 3];
    machineData.push({
      label: machines[i],
      data: data,
      backgroundColor: backgroundColor,
      borderWidth: 1,
    });
  }
  
  return (
    <Bar
      data={{
        labels: labels,
        datasets: machineData,
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
