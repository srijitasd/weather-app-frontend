import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CardPillComponent from "../../../components/cards/cardPill/CardPillComponent";

import styles from "./style.module.scss";

function CardlayoutScrollComponent({ data }) {
  console.log(data);
  return (
    <div className={styles.pill_card_cont}>
      {data[0].data === null ? (
        <SkeletonTheme baseColor="rgba(0, 0, 0, 0.05)">
          {" "}
          <Skeleton style={{ marginTop: "1rem" }} height={50} count={2} />{" "}
        </SkeletonTheme>
      ) : (
        data.map((data, id) => {
          return (
            <CardPillComponent
              icon={data.icon}
              temperature={`${data.temperature}${data.unit}`}
              time={data.time}
            />
          );
        })
      )}
    </div>
  );
}

export default CardlayoutScrollComponent;
