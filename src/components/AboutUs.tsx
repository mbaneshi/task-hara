import ComponentWrapper from "../Layout/ComponentWrapper";

export default function AboutUs() {
  return (
    <ComponentWrapper>
      <h1>Task</h1>
      <p>This Task receive from hara company</p>
      <img
        src="./task.png"
        alt="Task"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </ComponentWrapper>
  );
}
