import React from "react";

function History() {


  var test =  JSON.parse(localStorage.getItem('history'))

  console.log(test)
  var div = document.getElementById('history')
  if(div !== null){
 

  for(var x=0;x<test.length;x++){
    var div1 = document.createElement('div')
    var p =  document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    p.innerText = 'Balance: ' + + test[x].total
    p1.innerText = 'Shares Held: '  + test[x].share
    p2.innerText = 'Run: ' + (x+1)
    div1.appendChild(p2)
    div1.appendChild(p)
    div1.appendChild(p1)
    div1.id = 'dataHistory'
    //
    //
   //
   //

    div.appendChild(div1)
    //

  }
}

  

  return (
    <div>
    <div className="nav">
      <header>
        <div id='space'> </div>
      <h3 id='header'>History  </h3>

      </header>

      

       
     
    </div>
    <div>
        History Of Trading
      </div>
      <div id='history'></div>
    </div>
  );
}

export default History