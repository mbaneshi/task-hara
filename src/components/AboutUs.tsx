import ComponentWraper from "../Layout/ComponentWraper";

export default function AboutUs() {
  return (
    <ComponentWraper>
      <h1>Task</h1>
      <p>This Task recieve from hara company</p>
      <img
        src="./task.png"
        alt="Task"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </ComponentWraper>
  );
}
