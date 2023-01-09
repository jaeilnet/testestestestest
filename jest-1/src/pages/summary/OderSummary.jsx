import React, { useEffect, useState } from "react";
import axios from "axios";

export const OderSummary = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    try {
      const data = await axios.get(`http://localhost:3030/${optionType}`);

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }, [optionType]);
  return <div>OderSummary</div>;
};
