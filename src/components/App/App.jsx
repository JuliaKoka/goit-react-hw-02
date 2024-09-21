import { useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

import css from "./App.module.css";

function App() {
  const [reviewsState, setReviewsState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description
        name="Sip Happens Café"
        text=" Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options name="Good" />
      <Options name="Neutral" />
      <Options name="Bad" />
      {/* <Options name="Reset" /> */}

      {/* <Feedback name="Good" rating={2} />
      <Feedback name="Neutral" rating={5} />
      <Feedback name="Bad" rating={8} />
      <Feedback name="Total" rating={88} />
      <Feedback name="Positive" rating={5} /> */}
      <Feedback />
    </div>
  );
}

export default App;
