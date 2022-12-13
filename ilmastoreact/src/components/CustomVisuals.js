import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
  const [showView, setView ] = useState([]);

  const visualId = useParams();
  console.log(visualId);

  useEffect(() => {
    async function getVisual() {
    const results = await axios.get('/api/customvisuals/' + visualId.vId );
      console.log(results);
      console.log(results.data);
      setShowData(results.data);
}
    getVisual();
  }, []);

/*
const view = showData.find(x => x.visual_Id === result.vId);
if(view == null){
    return <div>Something went wrong</div>
}
*/
let v1 = false;
let v3 = false;
let v5 = false;
let v6 = false;
let v7 = false;
let v8 = false;
let v9 = false;
if (showData.v1 === true) { v1 = true}
if (showData.v3 === true) { v3 = true}
if (showData.v5 === true) { v5 = true}
if (showData.v6 === true) { v6 = true}
if (showData.v7 === true) { v7 = true}
if (showData.v8 === true) { v8 = true}
if (showData.v9 === true) { v9 = true}
  
return (
    <div>

    <div>{v1 && <div>{< V1 />}</div> } </div>

    <div>{v3 && <div>{< V3 />}</div> } </div>

    <div>{v5 && <div>{< V5 />}</div> } </div>

    <div>{v6 && <div>{< V6 />}</div> } </div>

    <div>{v7 && <div>{< V7 />}</div> } </div>
    
    <div>{v8 && <div>{< V8 />}</div> } </div>
    
    <div>{v9 && <div>{< V9 />}</div> } </div>

  
    </div>
  );
}

