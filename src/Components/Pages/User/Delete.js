import axios from 'axios';
import { NavLink, useNavigate, useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';

function Delete() { 
    const {userId} = useParams();

    const [user,setUser]=useState({});

    const navi = useNavigate()

    async function fetchData(){
        const result =await axios.get(`http://localhost:5000/users/${userId}`);
    
        setUser(result.data);
    } 

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navi('user/show');
    } 

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
    <center><u><h1> DELETE CONFIRMATION FORM</h1></u>
    <div className='container mt-5'>
        <h3>Do you want to delete?<span style={{'color':'red'}}>{user.mobname}{user.mobmodel}{user.mobcolor}</span></h3>
        <button onClick={deleteUser()} className='btn btn-outline-danger col-3'>YES</button>
        <NavLink to="/user/show"><button className='btn btn-outline-warning col-3'>NO</button></NavLink>
    </div>
    </center>
    </>
  )
}

export default Delete