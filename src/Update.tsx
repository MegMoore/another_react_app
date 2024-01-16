import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "./App";

export const Update = () => {
 // const [data, setData] = useState<User>();
  const { id } = useParams();
  const [values, setValues] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/users/${id}`)
      .then((res) => {
          setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
      axios.put(`${baseUrl}/api/users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Kid</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="Enter Firstname"
              value={values.firstname}
              onChange={(e) =>
                setValues({ ...values, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Lastname"
              value={values.lastname}
              onChange={(e) =>
                setValues({ ...values, lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};
