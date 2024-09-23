import { useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

function App() {
  const [reviewsState, setReviewsState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
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

  return (
    <div>
      <Description
        name="Sip Happens Café"
        text=" Please leave your feedback about our service by selecting one of the
        options below."
      />
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
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <div>
          <Feedback feedbackType="Good" ratingValue={reviewsState.good} />
          <Feedback feedbackType="Neutral" ratingValue={reviewsState.neutral} />
          <Feedback feedbackType="Bad" ratingValue={reviewsState.bad} />
        </div>
      )}
    </div>
  );
}

export default App;
