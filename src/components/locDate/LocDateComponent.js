import React, { useMemo } from "react";
import LocationComponent from "../UI/location/LocationComponent";
import DateComponent from "../UI/date/Date";

function LocDateComponent({ location, timestamp }) {
  const date = useMemo(() => {
    const date = new Date(timestamp);
    const dateFormat = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    return dateFormat;
  }, [timestamp]);
  return (
    <div style={{ marginTop: "1rem" }}>
      <LocationComponent location={location} />
      <DateComponent date={date} />
    </div>
  );
}

export default LocDateComponent;
