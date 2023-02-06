import React from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { red,blue, green, purple , orange,yellow  } from '@mui/material/colors';
ChartJS.register(...registerables);




function BarChart(){
    return(
        <Bar
        
        style={{paddding: "20px", width: "80%"}}

        data={{
            labels: ["Joseph Ndungu", "Stephen Chege", "Benjamin Munuve"],
            datasets: [
                {
                    label: "A3F",
                    data: [90, 70, 80],
                    backgroundColor: [
                        blue[500],

                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
                {
                    label: "TBA19",
                    data: [50, 40, 60],
                    backgroundColor: [
                      
                        orange[500],

                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)"],
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
                                max: 100
                    },
                },

                title: {
                    display: true,
                    position: 'top',
                    align: 'left',
                    fontSize: 15,
                    text: 'Bitcoin Mining Difficulty'
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        fontColor: "#333",
                        fontSize: 16
                    }
                },
            }}

            redraw={true}
        />
    )
    ;
        

    
}   




export default BarChart;