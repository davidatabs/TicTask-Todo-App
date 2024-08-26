import style from "./input.module.css";

export default function AddInput({
  value,
  handleInputChange,
  handleAddNewTask,
}) {
  return (
    <div>
      <input
        type="text"
        className={style.addInput}
        placeholder="Start writing something achievable"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") {
            return;
          }
          handleAddNewTask();
        }}
      />
    </div>
  );
}
