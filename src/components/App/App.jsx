import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

function App() {
  const [reviewsState, setReviewsState] = useState(() => {
    const savedRating = window.localStorage.getItem("reviews-state");
    return savedRating !== null
      ? JSON.parse(savedRating)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback =
    reviewsState.good + reviewsState.neutral + reviewsState.bad;

  const updateFeedback = (type) => {
    if (type === "Good") {
      setReviewsState({
        ...reviewsState,
        good: reviewsState.good + 1,
      });
    } else if (type === "Bad") {
      setReviewsState({ ...reviewsState, bad: reviewsState.bad + 1 });
    } else if (type === "Neutral") {
      setReviewsState({ ...reviewsState, neutral: reviewsState.neutral + 1 });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("reviews-state", JSON.stringify(reviewsState));
  }, [reviewsState]);

  return (
    <div className={css.container}>
      <Description
        name="Sip Happens Café"
        text=" Please leave your feedback about our service by selecting one of the
        options below."
      />
      <div className={css.buttonsContainer}>
        <Options buttonName="Good" onUpdate={() => updateFeedback("Good")} />
        <Options
          buttonName="Neutral"
          onUpdate={() => updateFeedback("Neutral")}
        />
        <Options buttonName="Bad" onUpdate={() => updateFeedback("Bad")} />
        {totalFeedback > 0 && (
          <Options
            buttonName="Reset"
            onUpdate={() => setReviewsState({ good: 0, bad: 0, neutral: 0 })}
          />
        )}
      </div>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <div>
          <Feedback feedbackType="Good" ratingValue={reviewsState.good} />
          <Feedback feedbackType="Neutral" ratingValue={reviewsState.neutral} />
          <Feedback feedbackType="Bad" ratingValue={reviewsState.bad} />
          <Feedback feedbackType="Total" ratingValue={totalFeedback} />
          <Feedback
            feedbackType="Positive"
            ratingValue={
              Math.round((reviewsState.good / totalFeedback) * 100) + "%"
            }
          />
        </div>
      )}
    </div>
  );
}

export default App;
