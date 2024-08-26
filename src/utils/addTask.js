export function addTask(task) {
  if (task.trim() === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    name: task,
    completed: false,
  };

  return newTask;
}
