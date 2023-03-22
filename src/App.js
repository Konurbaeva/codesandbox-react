import "./styles.css";
import "./styles.css";
import { useEffect, useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState(
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
  );
  return (
    <div className="App">
      <select onChange={(e) => console.log(e.target.value)}>
        {countries.map((item, index) => {
          return <option>{item.value}</option>;
        })}
      </select>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option>{item.cities}</option>;
        })}
      </select>
    </div>
  );
}
