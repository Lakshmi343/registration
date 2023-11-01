import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();

  const fetchData = async (id) => {
    try {
      let response = await axios.get(`http://localhost:7000/api/${id}`);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setName(response.data.name);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:7000/api/update/${id}`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteFunction = async () => {
    try {
      let response = await axios.delete(`http://localhost:7000/api/delete/${id}`);
      console.log(response.data, "delete");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={onsubmit}>Submit</button>
      <button onClick={deleteFunction}>Delete</button>
      <Link to="/details">
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default App;
