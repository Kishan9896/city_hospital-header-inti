import React from "react";
import { useSelector } from "react-redux";

function Alert(props) {
  const alert = useSelector((state) => state.text);
  const dispatch = useDispatch();
  return <div></div>;
}

export default Alert;
