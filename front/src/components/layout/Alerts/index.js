// Libraries
import React, { useContext } from "react";
import AlertContext from "../../../context/Alert/context";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.key}>
        <p>{alert.msg}</p>
      </div>
    ))
  );
};

export default Alerts;
