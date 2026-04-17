import { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    course: ""
  });

  const submit = async () => {
    // ✅ Validation
    if (!data.name || !data.email || !data.password || !data.course) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
        "https://lallalalal.onrender.com/api/register",
        data
      );

      alert("Registered Successfully");

      // 🔥 Optional: clear form
      setData({
        name: "",
        email: "",
        password: "",
        course: ""
      });

    } catch (err) {
      console.log("ERROR:", err.response);
      alert(err.response?.data?.msg || "Registration Failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <input
        placeholder="Course"
        value={data.course}
        onChange={(e) =>
          setData({ ...data, course: e.target.value })
        }
      />

      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;