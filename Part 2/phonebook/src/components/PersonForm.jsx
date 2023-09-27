import { useState } from "react";

export default function PersonForm(props) {
  return (
    <div>
      <div>
        name:{" "}
        <input value={props.name} onChange={props.onAddName} type="text" />{" "}
      </div>
      <div>
        number: <input value={props.number} onChange={props.onAddNumber} />{" "}
      </div>
      <div>
        <button type="submit" onClick={props.onAddPerson}>
          add
        </button>
      </div>
    </div>
  );
}
