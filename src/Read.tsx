import axios from 'axios';
import { useEffect, useState } from 'react'
import { baseUrl } from './App';
import { useParams } from 'react-router-dom';



function Read() {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/api/users/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  })
  

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Username: {data.username}</strong>
        </div>
        <div>
        <strong>Firstname: {data.firstname}</strong>
        </div>
        </div> 
    </div>
  )
}
export default Read
