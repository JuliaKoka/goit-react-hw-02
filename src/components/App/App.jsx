import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

export default function App() {
  const [reviewsState, setReviewsState] = useState(() => {
    const savedRating = window.localStorage.getItem("reviews-state");
    return savedRating !== null
      ? JSON.parse(savedRating)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setReviewsState({
      ...reviewsState,
      [feedbackType]: reviewsState[feedbackType] + 1,
    });

    if (feedbackType === "reset") {
      setReviewsState({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  const totalFeedback =
    reviewsState.good + reviewsState.neutral + reviewsState.bad;

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
      <Options
        goodButton="Good"
        neutralButton="Neutral"
        badButton="Bad"
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={reviewsState.good}
          neutral={reviewsState.neutral}
          bad={reviewsState.bad}
          total={totalFeedback}
          positive={Math.round((reviewsState.good / totalFeedback) * 100) + "%"}
        />
      )}
    </div>
  );
}
