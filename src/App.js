import './App.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FirstStep from './comps/FirstStep';
import SecondStep from './comps/SecondStep';
import ThirdStep from './comps/ThirdStep';
import {multistepcontext} from './StepContext';
import DisplayData from './comps/DisplayData';
import { useContext } from 'react';
function App() {
 const {currentstep,finalData} =useContext(multistepcontext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep/>;
      case 2:
        return <SecondStep/>;
      case 3:
        return <ThirdStep/>;
     
    }
  }
  

  return(
  <div className="App">
      <header >
        <h4 style={{color:"#f50057"}}>Multi Form</h4>
        <Stepper style={{width:'21%',marginLeft:"38%"}} activestep={currentstep-1} orientation="horizontal">
        
          <Step >
            <StepLabel>  </StepLabel>
          </Step>
          <Step >
            <StepLabel></StepLabel>
          </Step>
          <Step >
            <StepLabel></StepLabel>
          </Step>
      
      </Stepper>
      {showStep(currentstep)}
      <DisplayData/>
      {/*  <FirstStep/>
       <SecondStep/>
       <ThirdStep/> */}
      </header>
    </div>
 
  );
}

export default App;
