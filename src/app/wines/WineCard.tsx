import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Wine } from "./interface";

type Props = {
  wine: Wine;
};

const WineCard = ({ wine }: Props) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{wine.name}</p>
        <small className="text-default-500">{wine.appellation}</small>
        <h4 className="font-bold text-large">{wine.region}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
          height={100}
        /> */}
      </CardBody>
    </Card>
  );
};

export default WineCard;
