import React, { useMemo } from "react";
import LocationComponent from "../UI/location/LocationComponent";
import DateComponent from "../UI/date/Date";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "./style.module.scss";

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
    <>
      {location === null ? (
        <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
          {" "}
          <Skeleton height={30} />{" "}
        </SkeletonTheme>
      ) : (
        <LocationComponent location={location} />
      )}

      {timestamp === null ? (
        <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
          {" "}
          <Skeleton height={15} className={style.offsetTop} />{" "}
        </SkeletonTheme>
      ) : (
        <DateComponent date={date} />
      )}
    </>
  );
}

export default LocDateComponent;
