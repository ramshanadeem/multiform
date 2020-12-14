import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {multistepcontext} from '../StepContext'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ThirdStep() {
  const classes = useStyles();
  const {setStep, userData, setUserData,submitData}=useContext(multistepcontext);

  return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Degree Program"  value={userData['degreequalification']} onChange={(e)=>setUserData({...userData,"degreequalification" :e.target.value})} variant="outlined" color="secondary"/><br></br>
      <TextField id="outlined-basic" label="Last Qualification"  value={userData['lastqualification']} onChange={(e)=>setUserData({...userData,"lastqualification" :e.target.value})} variant="outlined"  color="secondary" /><br></br>
      {/* <TextField id="outlined-basic" label="Contact Number"  value={userData['email']} onChange={(e)=>setUserData({...userData,"email" :e.target.value})} variant="outlined"  color="secondary" /><br></br> */}
      <Button variant="contained" onClick={submitData} color="secondary">
      Submit
  </Button>
  <Button variant="contained" onClick={()=>setStep(2)} color="secondary">
    Back
  </Button>
    </form>
    
  </>
  );
}
