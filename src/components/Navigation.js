import React from "react";
import { Line } from "react-chartjs-2";
function Navigation({ chartData }) {
  return (
    <div className="nav">
      <header>
        <div id='space'> </div>
        <p id="name">WRESTER</p>
      </header>

       
      <ul > 
     <li > <a href='/main'>Home</a></li>
     <li > <a href='/main1'>Scores</a></li>
     <li > <a href='/howappworks'>How App Works</a></li>
     <li > <a href='/history'>History</a></li>

     
      </ul>
    </div>
  );
}

export default Navigation