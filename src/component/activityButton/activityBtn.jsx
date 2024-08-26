import React from "react";
import style from "./activityBtn.module.css";

export default function ActivityBTNs({ setFilter, currentFilter }) {
  return (
    <div className={style.activityContainer}>
      <button
        className={currentFilter === "all" ? style.active : ""}
        onClick={() => setFilter("all")}>
        All
      </button>
      <button
        className={currentFilter === "done" ? style.active : ""}
        onClick={() => setFilter("done")}>
        Done
      </button>
    </div>
  );
}
