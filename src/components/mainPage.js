import logo from '../logo.svg';
import '../App.css';
import './Navigation.css'
import GaugeChart from 'react-gauge-chart'
import Chart from 'chart.js/auto';

import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Data";
import PieChart from "../charts/pieChart";
 import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import TextField from '@mui/material/TextField';
import Login from './login'
import Navigation from './Navigation';







function setToken (u,p,i){
  sessionStorage.setItem('user',u)
  sessionStorage.setItem('passw',p)
  sessionStorage.setItem('id',i)
  
  window.location.href = '/charts'

}


function getToken () {
  const user = sessionStorage.getItem('user')
  return user
}


function testPy () {
  console.log('here')

  fetch('http://localhost:8080/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
var Balance;
var Profit 
var Shares

function saveHistory () {


  var historyOfData =  JSON.parse(localStorage.getItem('history'))
  var newHistory = []


  newHistory.push({total:Balance,share:Shares})

 
  if(historyOfData !== null){
    historyOfData =historyOfData.conncat(newHistory)
  }
  localStorage.setItem("history",JSON.stringify(newHistory))


}


function displayData(data) {
  if(document.getElementById('total') !== null){

  
  var test = document.getElementById('total')
  test.innerText = "121212"
  //

  }
  
  


  
  // document.getElementById('profit').innerText = data.Profit

  // document.getElementById('shares').innerText = data.SharesHeld

}

 
export default function Main() {


   

  const user = getToken() 

  const lastElement = Data[Data.length - 1];
  console.log(lastElement); 
    Balance = lastElement.Balance.toFixed(2)
    Profit= lastElement.Profit.toFixed(2)
    Shares = lastElement.SharesHeld.toFixed(2)

 



  Chart.register(CategoryScale);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.Profit), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.SharesHeld),
        backgroundColor: [
          "rgba(75,192,192,1)",
           "&quot",
           "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  
  });


  if(!user){
    return   <Login setToken={setToken}/>
  }


  return (
  
  
  

// function App() {
//   return (
    <div className="App">

     

      <div>


      </div>

<div className="App">
     
      
    </div>

      {/* <div>

        <div>
       <p>Stock Trading Project ReactJS</p>
       </div>


     

      <div className='gauges'>
        <div>
     
      <GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={0.77}
      arcPadding={0.02}
      textColor={'#5BE12C'}
      style ={{width:'20%',float:'left'}}
      
      />

</div>

<div>

Sell reccomendation
<GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={0.77}
      arcPadding={0.02}
      style ={{width:'20%',float:'left'}}
      textColor={'#5BE12C'}
      />

</div>

<GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={0.77}
      arcPadding={0.02}
      style ={{width:'20%',float:'left'}}
      textColor={'#5BE12C'}
      />
      <GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={0.77}
      arcPadding={0.02}
      style ={{width:'20%',float:'left'}}
      textColor={'#5BE12C'}
      />

   <GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={0.77}
      arcPadding={0.02}
      style ={{width:'20%',float:'left'}}
      textColor={'#5BE12C'}
      />
      </div> 
      </div><br/> */}

      <div id='chart'> 
      

      <div id='allcharts'>
      <div id='lineChart'>
      <LineChart chartData={chartData} />

   

 
      </div>
      <div id='start'>

 <input placeholder='Enter $ amount' type="number"></input> <br/>
 <button>Start Trading</button>
 </div>


<div id="summary">
 <p id='total'> Total Balace: <span style={{color:'green'}}>{Balance}</span></p>


 <p id='shares'>Shares Held: <span style={{color:'green'}}>{Shares}</span> </p>
<button onClick={saveHistory}>save in history</button>

</div>

      {/* <div id='pieChart'>
      <PieChart chartData={chartData} />

 

 
      </div>

      <div id='barChart'>
      <BarChart chartData={chartData} />

 

 
      </div> */}


      </div>


      <div>


  
      </div>
      
      
      </div>

      <button onClick={testPy}>test python</button>

   
    </div>
  );
}


