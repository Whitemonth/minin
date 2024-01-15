import logo from "/logo-name.svg";

export default function Header() {
  let time = new Date();
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      {/* <h3>Resut University</h3> */}
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </header>
  );
}
