import { React, useState, useEffect} from "react";
import {Doughnut, } from 'react-chartjs-2';
import axios from "axios";
import "chart.js/auto";


const V9Sectors = () => {
const [sectorData,setsectorData] = useState([]);
const [graphState, updateState] = useState(true);


useEffect(() => {
    axios
    .get("/api/v9sectors")
    .then((response) => {
        setsectorData(response.data);
        console.log(response.data)})
        .catch((error) =>{
            //status(500).send(error.message)
        });
},[]);

function showSector() {
updateState(true);
}

function showSubSector() {
updateState(false);
}        

    return (
        <div>
          {graphState &&<Doughnut
          options ={{onClick: showSubSector,}
              }
            data={{
              labels: sectorData.slice(0,4).map((c) => c.sectors),
              datasets: [
                {
                  label: "sectors",
                  backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
                  borderColor: ["rgb(50, 62, 110)","rgb(100,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
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
            ],
            }}
          /> }
          {!graphState && <Doughnut
          options={{onClick: showSector}}
          data={{
            labels: sectorData.slice(5,21).map((c) => c.subSectors),
            datasets: [
              {
                label: "sectors",
                backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
                borderColor: ["rgb(50, 62, 110)","rgb(100,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
                borderWidth: 2,
                hoverBorderColor: "yellow",
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "doughnut",
                radius: '40%',
                borderAlign: 'inner',
                data: sectorData.slice(5,21).map((c) => c.co2),
              },
          ],
          }}/>}
          
                  </div>               
      );
    };
    export default V9Sectors;

