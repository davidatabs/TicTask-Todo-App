import style from "./home.module.css";
import React from "react";

import PageHeader from "../component/header/header";
import Title from "../component/title/title";
import SubInfo from "../component/subInfo/info";

import TaskContainer from "../component/taskContainer/taskContainer";

export default function HomePage() {
  return (
    <div>
      <div className={style.home}>
        <PageHeader />

        <div className={style.body}>
          <Title />

          <SubInfo />

          <TaskContainer />
        </div>
      </div>
    </div>
  );
}
