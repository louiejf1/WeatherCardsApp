import React from "react";
import "./styles.css";
import { WeatherCard } from "./componnts/WeatherCard/WeatherCard";

export default function App() {
  return (
    <div className="App">
      <h1>My starting point</h1>
      <WeatherCard />
    </div>
  );
}
