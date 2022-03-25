import { useState } from "react";
import TextBox from "./TextBox";
import axios from 'axios'
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Horoscope() {
  //TODO: Fill in the ? with appropriate names/values for a horoscope.
  //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");
  const [horoscope, setHoroscope] = useState<string[]>([]);

  const requestHoroscope = () => {
    const toSend = {
      // Pass in the values for the data. Follow the format the route expects!
      sun: sun,
      moon: moon,
      rising: rising,
    };

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    // Install and import axios!
    // Fill in 1) location for request 2) your data 3) configuration
    axios
      .post("http://localhost:4567/horoscope", toSend, config)
      .then((response) => {
        console.log(response.data);
        //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
        //Note: It is very important that you understand how this is set up and why it works!
        setHoroscope(response.data["horoscope"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Horoscope">
      <TextBox label={"Sun Sign"} change={setSun} />
      <TextBox label={"Moon Sign"} change={setMoon} />
      <TextBox label={"Rising Sign"} change={setRising} />
      <AwesomeButton type="primary" ripple onPress={requestHoroscope}>
        Submit
      </AwesomeButton>
      {horoscope.map((ele) => (
        <p> {ele} </p>
      ))}
    </div>
  );
}

export default Horoscope;