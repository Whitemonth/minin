import { useState } from "react";
import logo from "/logo-name.svg";

export default function Header() {
  const [clock, setClock] = useState(new Date());
  setInterval(() => setClock(new Date()), 1000);
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      {/* <h3>Resut University</h3> */}

      <span>Время сейчас: {clock.toLocaleTimeString()}</span>
    </header>
  );
}
