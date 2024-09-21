import css from "./Description.module.css";

export default function Description({ name, text }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
}
