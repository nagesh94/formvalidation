import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import Headers from './Headers';
import { TextField } from '@material-ui/core';
import useStyles from "./app"


function App() {
  const classes=useStyles()
  const { formState: { errors }, register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data);
  return (
    <main>
      <Headers />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextField type="number" label="Rating" color='primary' variant='outlined'
        className={classes.rating}
      />
      
      </form>
    </main>
  );
}

export default App;