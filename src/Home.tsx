import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "./App";
import { Link } from "react-router-dom";
import {User} from './Interfaces'


export const Home = () => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/users`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4"></div>
      <div className="d-flex justify-content-end">
        <Link to={"/create"} className="btn btn-success">
          Add +
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Username</th>

          </tr>
        </thead>
        <tbody>
          {user.map((user, u) => (
            <tr key={u}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>
                <Link className="btn btn-sm btn-info me-2" to={`/read/${user.id}`}>Read</Link>
                <button className="btn btn-sm btn-primary me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
