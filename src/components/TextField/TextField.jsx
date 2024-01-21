import "./TextField.css";

export default function TextField(props) {
  return (
    <div>
      <p className="input-layer">{props.text}</p>
    </div>
  );
}
