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

export default function FirstStep() {
  const classes = useStyles();
  const {setStep, userData, setUserData}=useContext(multistepcontext);

  return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" value={userData['firstname']} onChange={(e)=>setUserData({...userData,"firstname" :e.target.value})} variant="outlined" color="secondary"/><br></br>
      <TextField id="outlined-basic" label="Last Name" value={userData['lastname']} onChange={(e)=>setUserData({...userData,"lastname" :e.target.value})} variant="outlined"  color="secondary" /><br></br>
      <TextField id="outlined-basic" label="Contact Number" value={userData['contactnumber']} onChange={(e)=>setUserData({...userData,"contactnumber" :e.target.value})} variant="outlined"  color="secondary" /><br></br>
      <Button variant="contained" color="secondary" onClick={()=>setStep(2)}>
Next
  </Button>
    </form>
    
  </>
  );
}
