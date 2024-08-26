import React, { useState } from "react";
import AddInput from "../Input/input";
import ActivityBTNs from "../activityButton/activityBtn";
import Task from "../task/task";
import style from "./taskContainer.module.css";

export default function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        name: inputValue,
        isChecked: false,
      };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
      setInputValue("");
    }
  };

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isChecked;
    return false;
  });

  return (
    <div className={style.taskContainer}>
      <AddInput
        value={inputValue}
        handleInputChange={setInputValue}
        handleAddNewTask={handleAddTask}
      />
      <ActivityBTNs setFilter={setFilter} currentFilter={filter} />
      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.name}
            isChecked={task.isChecked}
            onCheckboxChange={() => handleCheckboxChange(task.id)}
            onRemoveTask={() => handleRemoveTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}
