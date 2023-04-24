import logo from './logo.svg';
import './App.css';
import './components/Navigation.css'
import GaugeChart from 'react-gauge-chart'
import Chart from 'chart.js/auto';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import PieChart from "./charts/pieChart";
 import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import TextField from '@mui/material/TextField';
import Login from './components/login'
import Navigation from './components/Navigation';
import AppDesc from './components/appDesc'
import Main from './components/mainPage';
import History from './components/history'
import Home from './components/appDesc'
import Score from './components/scroes';







function setToken (u,p,i){
  sessionStorage.setItem('user',u)
  sessionStorage.setItem('passw',p)
  sessionStorage.setItem('id',i)

  window.location.href = '/main'

}


function getToken () {
  const user = sessionStorage.getItem('user')
  return user
}



export default function App() {




  const user = getToken()


  Chart.register(CategoryScale);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.Step),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.Profit),
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

      <Navigation/>
   <Routes>

     <Route path='/home' element={<Home/>}/>
     <Route path='/main1' element={<Score/>}/>
     <Route path='/main' element={<Main/>}/>
     <Route path='/history' element={<History/>}/>
   
     </Routes>

    </div>
  );
}


