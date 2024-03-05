
import './App.css'
import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import WebHeader from './Components/WebHeader';
import LearnMap from './Components/LearnMap';
import RefreshPage from './Components/RefershPage';

function App() {
 
  return  <div >
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
      <WebHeader></WebHeader>
      <br></br>
      <LearnMap></LearnMap>
  
   
      


  </div>
   
    
 
  
}

export default App;
