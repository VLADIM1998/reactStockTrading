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

function saveHistory () {
  console.log(Date)
  var historyOfData =  JSON.parse(localStorage.getItem('history'))
  var newHistory = []
  var total = document.getElementById("total").innerText
  var profit = document.getElementById("profit").innerText
  var balance = document.getElementById("balance").innerText
  var share = document.getElementById("share").innerText
  newHistory.push({total:total,profit:profit,balance:balance,share:share})

  historyOfData =historyOfData.conncat(newHistory)
  localStorage.setItem("history",JSON.stringify(newHistory))


}


function formatData (data) {
    var formatteddata = []
//  for(var x=0;x<data.length;x++){
//      var date = 

//  }
  var count = 0  
 for (const timestamp in data) {

    count ++ 
    if (count %5 ===0){
    const value = data[timestamp];
    var date = Number(timestamp)
    date = new Date(date)
    var month = date.getMonth()+1
    var date1 = date.getDate()
    var year = date.getFullYear()
    date = month + '-'+date1 + '-'+year
    formatteddata.push({date:date,dateNumber:Number(timestamp),value:value})
    }
   

  }

  return formatteddata
}
 
export default function Score() {


   

  const user = getToken() 

  var data = JSON.parse(localStorage.getItem('data'))

  

  
  var formattedData = formatData(data.Chart.Open)
  console.log(formattedData)

  var sentimente = Number(data.Scores.sentiment) * 100
  var stockAnalisys = data.Scores.stock_analysis[0] * 100
  sentimente = sentimente.toFixed(0)
  stockAnalisys = stockAnalisys.toFixed(0)
  console.log(sentimente)

  Chart.register(CategoryScale);

  const [chartData, setChartData] = useState({
    labels: formattedData.map((data) => data.date), 
    datasets: [
      {
        label: "Stock Value",
        data: formattedData.map((data) => data.value),
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
      <div style={{textAlign:'center'}}>
      <div>

 <p style={{float:'left'}}> Sentiment Analisys</p>

<GaugeChart id="gauge-chart1"
      nrOfLevels={420}
      arcsLength={[0.2, 0.2, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={Number(sentimente/100)}
      arcPadding={0.02}
      style ={{width:'30%',float:'left'}}
      textColor={'#5BE12C'}
      />

</div>

<div >
    <p style={{float:'left'}}> Stock Analisys Score</p>


<GaugeChart id="gauge-chart2"
      nrOfLevels={420}
      arcsLength={[0.2, 0.2, 0.2]}
      colors={['#EA4228', '#F5CD19', '#5BE12C']}
      percent={stockAnalisys/100}
      arcPadding={0.02}
      style ={{width:'30%',float:'left'}}
      textColor={'#5BE12C'}
      />

</div>
</div>
<div></div>

   

 
      </div>

      <div id='start' style={{marginTop:'200px'}}>

 <input placeholder='Enter $ amount' type="number"></input> <br/>
 <button>Start Trading</button>
 </div>


<div id="summary">
 <p id='total'> Total Balace</p>
 <p id='profit'>Biggest Profit</p>
 <p id='balance'>Balance</p>
 <p id='shares'>Shares held</p>
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


