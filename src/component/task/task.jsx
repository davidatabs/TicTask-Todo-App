import React from "react";
import style from "./task.module.css";

export default function Task({
  taskName,
  isChecked,
  onCheckboxChange,
  onRemoveTask,
}) {
  return (
    <li className={style.task}>
      <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
      <span
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
        contentEditable="true">
        {taskName}
      </span>
      <svg
        onClick={onRemoveTask}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 4H14"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33333 4V2.66667C5.33333 2.31304 5.4738 1.97391 5.72385 1.72386C5.9739 1.47381 6.31304 1.33333 6.66666 1.33333H9.33333C9.68695 1.33333 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31304 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66666C4.31304 14.6667 3.9739 14.5262 3.72385 14.2761C3.4738 14.0261 3.33333 13.687 3.33333 13.3333V4H12.6667Z"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  );
}
