import React from 'react' 
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
    const {register,handleSubmit} = useForm();
    const navi= useNavigate();

    function saveData(data){ 
        axios.post( 'http://localhost:5000/users',data)
        // alert('record added...');
        navi('user/show')
    }

  return (
    <div className='container'>
        <center><h1><u>Mobile information Form</u></h1></center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='m'>Enter MobName:</label>
            <input type="text" id='m' className='form-control' {...register('mobname')}></input>
            <br></br>
            <label htmlFor='md'>Enter MobModel:</label>
            <input type="number" id='md' className='form-control'{...register('mobmodel')}></input>
            <br></br>
            <label htmlFor='mc'>Enter Mobcolor:</label>
            <input type="text" id='mc' className='form-control'{...register('mobcolor')}></input>
            <br></br>
            <input type="submit" value="Add Mobile INfo" className='btn btn-outline-warning col-6'></input>
            <input type="submit"value="Reset" className='btn btn-outline-success col-6'></input>
        </form>
    </div>
  )
}

export default Add