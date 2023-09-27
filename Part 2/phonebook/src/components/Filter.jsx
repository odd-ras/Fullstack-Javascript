import { useState } from "react";

export default function Filter(props) {
  return (
    <p>
      {" "}
      Filter shown with: <input onChange={props.onFilter} />{" "}
    </p>
  );
}
