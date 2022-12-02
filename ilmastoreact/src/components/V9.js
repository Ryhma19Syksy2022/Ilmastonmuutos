import { React, useState, useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';
import axios from "axios";
import "chart.js/auto";

const V9 =() => {
const [sectorData,setsectorData] = useState([]);
const [graphState,updateState] = useState(true);

useEffect(() => {
    async function getSectors(){
     const results = await axios.get("/api/v9sectors")
     console.log(results);
     console.log(results.data);
     setsectorData(results.data)
    }
    getSectors();
},[])

const sectorsData = {
    labels: sectorData.slice(0,4).map((c) => c.sectors),
    datasets: [
      {
        label: "sectors",
        backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
        borderColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
        borderWidth: 2,
        hoverBorderColor: "yellow",
        hoverBorderWidth: 2,
        fill: false,
        tension: 0,
        type: "doughnut",
        radius: '40%',
        borderAlign: 'inner',
        data: sectorData.slice(0,4).map((c) => c.co2),
      },
    ]
}

const subSectorsData = {
    labels: sectorData.slice(5,21).map((c) => c.subSectors),
    datasets:[
        {
            label: "subSectors",
            backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)","rgb(1,14,143)","rgb(256,233,1)","rgb(15,1,66)","rgb(66,144,5)","rgb(22,99,155)","rgb(13,64,92)","rgb(255,44,0)","rgb(222,55,111)","rgb(111,44,77)","rgb(88,44,99)","rgb(99,44,222)","rgb(77,77,222)",],
            borderColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)","rgb(1,14,143)","rgb(256,233,1)","rgb(15,1,66)","rgb(66,144,5)","rgb(22,99,155)","rgb(13,64,92)","rgb(255,44,0)","rgb(222,55,111)","rgb(111,44,77)","rgb(88,44,99)","rgb(99,44,222)","rgb(77,77,222)",],
            borderWidth: 2,
            hoverBorderColor: "yellow",
            hoverBorderWidth:2,
            fill: false,
            tension: 0,
            type: "doughnut",
            radius: '40%',
            borderAlign: 'inner',
            data: sectorData.slice(5,21).map((c) => c.co2),
    }]
}

function showSector(event, array) {
    if(array[0]){
        updateState(true);
    }
}
            
function showSubSector(event,array) {
    if(array[0]){
        updateState(false);
    }
} 

return (
  <>
  <div style={{ width: "auto" }}>
    <p>By clicking the chart you can see further breakdown of the emissions of sectors</p>
    {graphState && <Doughnut data={sectorsData} options={{onClick:showSubSector}}></Doughnut>}
    {!graphState && <Doughnut data={subSectorsData} options={{onClick:showSector}}></Doughnut>}
  </div>
  </>
  );
  }
  export default V9;

