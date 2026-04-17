import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({});

  const login = async () => {
    const res = await axios.post(" https://lallalalal.onrender.com/api/login", data);

    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;