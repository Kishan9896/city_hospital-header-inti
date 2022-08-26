import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

function Alert(props) {
  const alert = useSelector((state) => state.text);
  const { enqueueSnackbar } = useSnackbar();

  console.log(alert);

  useEffect (() => {
    if (alert.text !== "") {
      enqueueSnackbar(alert.text, {
        variant: alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  }, [alert.text])
  return <div></div>;
} 

export default Alert;
