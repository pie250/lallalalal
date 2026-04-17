import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const login = async () => {
    try {
      const res = await axios.post(
        "https://lallalalal.onrender.com/api/login",
        data
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (err) {
      console.log("ERROR:", err.response); // 🔥 DEBUG
      alert(err.response?.data?.msg || "Login Failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;