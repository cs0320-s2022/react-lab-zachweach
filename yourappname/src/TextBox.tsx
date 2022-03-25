import "./App.css";

function TextBox(
  props: {
    label: string;
    change: (s: string) => void }) {
  return (
    <div className="TextBox">
      Enter {props.label}:{" "}
      <input
        type={"text"}
        onChange={(event) => props.change(event.target.value)}
      />
    </div>
  );
}

export default TextBox;