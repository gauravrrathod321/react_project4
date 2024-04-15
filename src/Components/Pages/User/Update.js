import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const {register,handleSubmit,setValue} = useForm();

    const {userId}= useParams();

    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)

        setValue('mobname',result.data.mobname);
        setValue('mobmodel',result.data.mobmodel);
        setValue('mobcolor',result.data.mobcolor);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data)
        navi('/user/show');
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='container'>
        <center><u><h1>Mobile update form</h1></u></center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='m'>Enter MobName:</label>
            <input type="text" id='m' className='form-control'{...register('mobname')}></input>
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

export default Update