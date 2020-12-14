import React,{useState} from "react";
import App from './App'
export const multistepcontext  = React.createContext();
const StepContext = () => {
    const [currentstep,setStep]= useState(1);
    const [userData,setUserData]= useState([]);
    const [finalData,setFinalData]= useState([]);
    function submitData() {
        setFinalData(finalData=>[...finalData,userData]);
        setUserData('');
        setStep(1);
        
    }
    return(
            <>
            <multistepcontext.Provider value={{currentstep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
                <App/>
            </multistepcontext.Provider>


            </>
    )
}
export default StepContext;