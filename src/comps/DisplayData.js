import React,{useContext} from 'react';
import {multistepcontext} from '../StepContext';
export default function DisplayData()
{
const {finalData} = useContext(multistepcontext);
 
     return(
         <>
         {finalData.map((data) =>(
             <div>{data.firstname}
             {data.lastname}
             {data.email}
             {data.contactnumber}
             {data.password}
             {data.degreequalification}
             {data.lastqualification}</div>
         ))}
         </>
     )
    
}