import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import V1 from "./V1V2";
import V3 from "./V3";
import V6 from "./V6";
import V5 from "./V5";
import V7 from "./V7";
import V8 from "./V8";
import V9 from "./V9";
import axios from "axios";

export default function CustomVisuals() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    async function getVisual() {
      const results = await axios.get("/api/customvisuals");
      console.log(results);
      console.log(results.data);
      setShowData(results.data);
    }
    getVisual();
  }, []);


  return (
    <div>
      <div>{showData.filter((c) => {
        if (c.v1 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V1 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.v3 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V3 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.v5 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V5 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.V6 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V6 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.v7 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V7 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.v8 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V8 />}</div>
      ))}
  </div>

  <div>{showData.filter((c) => {
        if (c.v9 === '0') {
          return false;
        } else {
          return true;
        }
      })
      .map((c) => (
        <div>{< V9 />}</div>
      ))}
  </div>
    </div>
  );
}

