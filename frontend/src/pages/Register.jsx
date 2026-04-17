import { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({});

  const submit = async () => {
    await axios.post(" https://lallalalal.onrender.com/api/register", data);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
      <input placeholder="Course" onChange={e => setData({...data, course: e.target.value})} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;