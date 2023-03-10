import React, { useEffect, useState } from "react";
import mqtt from "mqtt";

// const client = mqtt.connect("ws://" + window.location.host + ":8083", {
//   clientId: "mqttjs01",
//   username: "ubuntu",
//   password: "1234",
//   port: 8083,
//   keepalive: 60,
//   reconnectPeriod: 1000,
// });

//
const client = mqtt.connect("mqtt://test.mosquitto.org:8081", {
  protocol: "mqtts",
  useSSL: true,
});

client.on("connect", () => {
  console.log("Connected to MQTT Broker");

  client.subscribe("monthly-line-efficiency");
  console.log("Subscribed to monthlylineefficiency");
});

function MonthlyLineEfficiency() {
  const [monthlyLineEfficiency, setMonthlyLineEfficiency] = useState(null);

  useEffect(() => {
    client.on("message", (topic, message) => {
      console.log(topic.toString());
      console.log(message.toString());
      const data = message.toString();
      console.log(data.split(","));
      setMonthlyLineEfficiency(data.split(","));
    });

    return () => {
      client.end();
    };
  }, []);

  if (!monthlyLineEfficiency) {
    return (
      <div className="text-center" style={{ position: "relative", top: "40%" }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="row">
  <div className="col s12 m6">
    <div className="card text-white bg-dark mb-3">
      <div className="card-header text-center">Monthly Line Efficiency</div>
      <ul className="list-group bg-dark">
        {Array.isArray(monthlyLineEfficiency) && monthlyLineEfficiency.map((item, index) => (
          <li key={index} className="list-group-item text-white bg-dark">
            {
              //remove special characters from the string
              //number the list items
              index + 1 + ". " +
              item.replace(/[^a-zA-Z0-9 ]/g, "")
            }
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
  );
}

export default MonthlyLineEfficiency;
