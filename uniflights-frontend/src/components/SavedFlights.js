import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FlightSearch.css";

export default function SavedFlights() {

  const [list, setList] = useState([]);

  const logos = {

    Lufthansa:
      "https://logo.clearbit.com/lufthansa.com",

    Emirates:
      "https://logo.clearbit.com/emirates.com",

    "Air India":
      "https://logo.clearbit.com/airindia.com",

    KLM:
      "https://logo.clearbit.com/klm.com",

    "British Airways":
      "https://logo.clearbit.com/britishairways.com",

    "Air France":
      "https://logo.clearbit.com/airfrance.com"

  };


  useEffect(() => {

    const load = async () => {

      const res = await axios.get(
        "http://localhost:8000/api/bookings/all"
      );

      setList(res.data);

    };

    load();

  }, []);


  return (

    <div className="main-layout">

      <h2>Saved Flights</h2>

      <div className="content">

        <div className="results">

          {list.map((f, i) => (

            <div
              key={i}
              className="flight-card"
            >

              <img
                src={logos[f.airline]}
                alt=""
                width="50"
              />

              <h3>{f.airline}</h3>

              <p>${f.price}</p>

              <p>Passengers: {f.passengers}</p>

              <p>Class: {f.travelClass}</p>

              <p>Depart: {f.departDate}</p>

              {f.returnDate && (
                <p>Return: {f.returnDate}</p>
              )}

              <a
                href={f.link}
                target="_blank"
                rel="noreferrer"
              >
                Book
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}