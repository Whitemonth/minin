import Header from "./components/header";
import WayToTeach from "./components/WayToTeach";
import { ways } from "./data";
import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";

export default function App() {
  function handleClick(type) {
    console.log("button clicked", type);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Тут типа это оппа ага смехотура то ебать кхе кхе</h3>
          <h3>Тут типа это оппа ага смехотура то ебать кхе кхе</h3>
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
            <TextField />
          </ul>
        </section>
      </main>
    </div>
  );
}
