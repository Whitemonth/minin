import Header from "./components/header";
import WayToTeach from "./components/WayToTeach";
import { ways } from "./data";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Тут типа это оппа ага смехотура то ебать кхе кхе</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            ></WayToTeach>
            <WayToTeach {...ways[1]}></WayToTeach>
            <WayToTeach {...ways[2]}></WayToTeach>
            <WayToTeach {...ways[3]}></WayToTeach>
          </ul>
        </section>
      </main>
    </div>
  );
}
