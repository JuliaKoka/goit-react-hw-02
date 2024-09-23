import css from "./Feedback.module.css";

export default function Feedback({ feedbackType, ratingValue }) {
  return (
    <p>
      {feedbackType}: {ratingValue}
    </p>
  );
}
