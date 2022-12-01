import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';


export default function BasicForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data: any) => console.log(JSON.stringify(data));
    
/*
  return (

    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" />    

  </Box>

  );
*/

return (

    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('firstName')} />
    <input {...register('lastName', { required: true })} />
    {errors.lastName && <p>Last name is required.</p>}
    <input {...register('age', { pattern: /\d+/ })} />
    {errors.age && <p>Please enter number for age.</p>}


    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" />    


    <input type="submit" />
  </form>

);

}