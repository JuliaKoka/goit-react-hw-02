import css from "./Options.module.css";

export default function Options({
  goodButton,
  neutralButton,
  badButton,
  onUpdate,
  totalFeedback,
}) {
  return (
    <ul className={css.buttonsContainer}>
      <li>
        <button onClick={() => onUpdate("good")}>{goodButton}</button>
      </li>
      <li>
        <button onClick={() => onUpdate("neutral")}>{neutralButton}</button>
      </li>
      <li>
        <button onClick={() => onUpdate("bad")}>{badButton}</button>
      </li>
      <li>
        {totalFeedback > 0 && (
          <button onClick={() => onUpdate("reset")}>Reset</button>
        )}
      </li>
    </ul>
  );
}
