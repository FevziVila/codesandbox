import { debug } from "./App";

export default function Input({
  x,
  y,
  w,
  h,
  label,
  layout = "col",
  type = "text"
}) {
  return (
    <label
      className={`Input ${debug ? "debug" : ""} ${layout ? layout : ""}`}
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      {label}
      <input
        type={type}
        style={{
          width: `${w}px`,
          height: `${h}px`
        }}
      />
      {debug ? (
        <>
          label:{label}
          <br />
          x:{x},y:{y},w:{w},h:{h}{" "}
        </>
      ) : (
        ""
      )}
    </label>
  );
}
