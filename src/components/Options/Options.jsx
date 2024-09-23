import css from "./Options.module.css";

export default function Options({ buttonName, onUpdate }) {
  return <button onClick={onUpdate}>{buttonName}</button>;
}
