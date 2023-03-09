import React, { useEffect, useState } from "react";
import mqtt from "mqtt";

function MonthlyLineEfficiency() {
  const [monthlyLineEfficiency, setMonthlyLineEfficiency] = useState("");

  useEffect(() => {
    const client = mqtt.connect("mqtt://test.mosquitto.org:8081", {
      protocol: "mqtts",
      clientId: "b0908853",
      useSSL: true,
    });

    client.on("connect", () => {
      console.log("connected to MQTT broker");
      client.subscribe("monthlylineefficiency");

    });

    client.on("message", (topic, message) => {
      console.log(topic.toString());  
      console.log(message.toString());
      setMonthlyLineEfficiency(message.toString());
    });

    return () => {
      client.end();
    }

  }, []);

  if(!monthlyLineEfficiency) return <div className='text-center' style={{position:"relative",top:"40%"}}>Loading...</div>

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header text-center">
            Monthly Line Efficiency
          </div>
          <ul className="list-group bg-dark">
            <li className="list-group-item text-white bg-dark">
              {monthlyLineEfficiency}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MonthlyLineEfficiency;
