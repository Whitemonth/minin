import "./Button.css";

export default function Button({ children, onClick }) {
  function handleClick() {}

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
