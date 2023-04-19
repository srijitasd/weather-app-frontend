import React from "react";
import CardFullWidthComponent from "../../../components/cards/cardFullWidth/CardFullWidthComponent";

function CardlayoutFullComponent({ data }) {
  return (
    <div style={{ margin: "1rem 0rem" }}>
      {data.map((data) => {
        return (
          <CardFullWidthComponent
            key={data.data}
            icon={data.icon}
            title={data.title}
            data={data.data}
          />
        );
      })}
    </div>
  );
}

export default CardlayoutFullComponent;
