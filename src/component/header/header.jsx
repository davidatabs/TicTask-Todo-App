import Logo from "../logo/logo";
import classNames from "./header.module.css";

export default function PageHeader() {
  return (
    <div className={classNames.header}>
      <Logo />
      <p>GitHub</p>
    </div>
  );
}
