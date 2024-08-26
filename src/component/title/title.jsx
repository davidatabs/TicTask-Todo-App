import style from "./title.module.css";

export default function Title() {
  return (
    <div>
      <h1 className={style.title}>
        Create.<p className={style.procastinate}>Procastinate.</p>
        Complete
      </h1>
    </div>
  );
}
