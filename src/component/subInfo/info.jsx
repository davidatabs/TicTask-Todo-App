import style from "./info.module.css";

export default function SubInfo() {
  return (
    <div>
      <p className={style.text}>
        Plan and Organize your day with TickTask.
        <br />
        Set your top four goals in no more than 50 characters.
      </p>
    </div>
  );
}
