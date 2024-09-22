"use client";

import React, { useEffect, useState } from "react";
import { Wine } from "./interface";
import WineCard from "./WineCard";
import { graphqlFetch } from "@/utils/graphqlFetch";
import { GET_WINES } from "./queries";

const WinesList = () => {
  const [wines, setWines] = useState<Wine[]>([]);

  useEffect(() => {
    const getWines = async () => {
      const result = await graphqlFetch(GET_WINES);

      console.log("result", result);
      setWines(result.wines);
    };

    getWines();
  }, []);

  console.log("wines", wines);
  return (
    <div>
      {wines.map((wine) => (
        <WineCard
          key={wine.id}
          wine={wine}
        />
      ))}
    </div>
  );
};

export default WinesList;
