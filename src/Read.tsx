import axios from 'axios';
import { useEffect, useState } from 'react'
import { baseUrl } from './App';
import { Link, useParams } from 'react-router-dom';
import { User } from './Interfaces';



function Read() {
  const [data, setData] = useState<User>()
  const {id} = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/api/users/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [id])
  

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Username: {data?.username}</strong>
        </div>
        <div className='mb-2'>
          <strong>Password: {data?.password}</strong>
        </div>
        <div className='mb-2'>
        <strong>Firstname: {data?.firstname}</strong>
        </div>
        <div className='mb-2'>
        <strong>Lastname: {data?.lastname}</strong>
        </div>
        <div className='mb-2'>
        <strong>Phone: {data?.phone}</strong>
        </div>
        <div className='mb-2'>
        <strong>Email: {data?.email}</strong>
        </div>
        <div className='mb-2'>
        <strong>Is Reviewer: {data?.isReviewer}</strong>
        </div>
        <div className='mb-2'>
        <strong>Is Admin: {data?.isAdmin}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to={'/'} className='btn btn-primary ms-3' >Back</Link>
        </div> 
    </div>
  )
}
export default Read
