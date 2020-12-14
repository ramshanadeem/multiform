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

export default function SecondStep() {
  const classes = useStyles();
  const {setStep, userData, setUserData}=useContext(multistepcontext);
  return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Email" value={userData['email']} onChange={(e)=>setUserData({...userData,"email" :e.target.value})} variant="outlined" color="secondary"/><br></br>
      <TextField id="outlined-basic" label="Password" value={userData['password']} onChange={(e)=>setUserData({...userData,"password" :e.target.value})} variant="outlined"  color="secondary" /><br></br>

      <Button variant="contained" onClick={()=>setStep(3)} color="secondary">
    Next
  </Button>
  <Button variant="contained" onClick={()=>setStep(1)} color="secondary">
    Back
  </Button>
    </form>
    
  </>
  );
}
