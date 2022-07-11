import style from "./Task.module.css";
export default function Task() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Task</h1>
      <p className={style.p}>This Task recieve from hara company</p>
      <img src="./task.png" alt="Task" className={style.img} />
    </div>
  );
}
