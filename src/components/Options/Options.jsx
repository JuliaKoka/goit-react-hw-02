import css from "./Options.module.css";

import { useState } from "react";

export default function Options({ buttonName, onUpdate }) {
  return <button onClick={onUpdate}>{buttonName}</button>;
}
