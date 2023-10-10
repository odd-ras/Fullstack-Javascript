import { useState } from "react";
import "./Notification.css";

export default function Notification({ message }) {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
}
