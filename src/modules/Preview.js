import React, { useEffect, useState } from "react";
import { prismicQueries } from "../utils";
import { PrismicDataHandler } from "../components";

export const Preview = () => {
  const [prismicData, SetPrismicData] = useState({ status: "loading" });

  useEffect(() => {
  }, []);

  return (
    <PrismicDataHandler
      prismicData={prismicData}
      Content={() => {}}
    />
  );
};
