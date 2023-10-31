import React from "react";
import { data } from "../../../utilis/cardData";
import Card from "./Card";

export default function KnowLedgeCard() {
  return (
    <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-3  px-8 lg:px-12 my-4">
      {data.map((cardData, index) => (
        <Card
          key={index}
          icon={cardData.icon}
          title={cardData.title}
          description={cardData.description}
          link={cardData.link}
        />
      ))}
    </div>
  );
}
