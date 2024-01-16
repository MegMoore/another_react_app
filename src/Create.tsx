import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "./App";

export const Create = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    isreviewer: false,
    isadmin: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/api/users`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a Kid</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="isReviewer">Is Reviewer</label>
            <input
              type="checkbox"
              name="isreviewer"
              onChange={(e) =>
                setValues({ ...values, isreviewer: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="isAdmin">Is Admin</label>
            <input
              type="checkbox"
              name="isadmin"
              onChange={(e) =>
                setValues({ ...values, isadmin: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

