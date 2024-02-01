import Header from "./components/header";
import WayToTeach from "./components/WayToTeach";
import { ways, differences } from "./data";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [contentType, setContentType] = useState(null);

  console.log("App render");

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Тестовая надпись для провреки проекта</h3>
          <h3>Еще одна надпись</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            ></WayToTeach>
            <WayToTeach {...ways[1]}></WayToTeach>
            <WayToTeach {...ways[2]}></WayToTeach>
            <WayToTeach {...ways[3]}></WayToTeach>
            <Button onClick={() => handleClick("way")}>Подход</Button>
            <Button onClick={() => handleClick("easy")}>Доступность</Button>
            <Button onClick={() => handleClick("program")}>Концентрация</Button>

            {!contentType ? <p>Нажми на кноку</p> : null}
            {contentType ? <p>{differences[contentType]}</p> : null}
          </ul>
        </section>
      </main>
    </div>
  );
}
