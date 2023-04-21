import React from "react";
import CardFullWidthComponent from "../../../components/cards/cardFullWidth/CardFullWidthComponent";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardlayoutFullComponent({ data }) {
  return (
    <div style={{ margin: "1rem 0rem" }}>
      {data[0].data === null ? (
        <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
          {" "}
          <Skeleton style={{ marginTop: "1rem" }} height={50} count={2} />{" "}
        </SkeletonTheme>
      ) : (
        data.map((data, id) => {
          return (
            <CardFullWidthComponent
              key={id}
              icon={data.icon}
              title={data.title}
              data={`${data.data}${data.unit}`}
            />
          );
        })
      )}
    </div>
  );
}

export default CardlayoutFullComponent;
