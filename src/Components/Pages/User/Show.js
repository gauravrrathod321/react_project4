import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';


function Show() {
    const [users,setUser] = useState([])

    async function fetchData(){
        const result= await axios.get('http://localhost:5000/users')
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <div className='container'>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>MobName</th>
                    <th>MobModel</th>
                    <th>mobcolor</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.mobname}</td>
                                <td>{obj.mobmodel}</td>
                                <td>{obj.mobcolor}</td>
                                <td>
                                    <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm'>Update</button></NavLink>
                                    <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>Delete</button></NavLink>
                                </td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}
export default Show