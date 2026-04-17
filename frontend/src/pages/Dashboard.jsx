import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const [course, setCourse] = useState("");

  const updatePassword = async () => {
    try {
      await axios.put(
        "https://lallalalal.onrender.com/api/update-password",
        password,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("Password updated");
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating password");
    }
  };

  const updateCourse = async () => {
    try {
      await axios.put(
        "https://lallalalal.onrender.com/api/update-course",
        { course },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("Course updated");
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating course");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // ✅ FIXED
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Update Password</h3>
      <input
        placeholder="Old"
        onChange={(e) =>
          setPassword({ ...password, oldPassword: e.target.value })
        }
      />
      <input
        placeholder="New"
        onChange={(e) =>
          setPassword({ ...password, newPassword: e.target.value })
        }
      />
      <button onClick={updatePassword}>Update</button>

      <h3>Update Course</h3>
      <input onChange={(e) => setCourse(e.target.value)} />
      <button onClick={updateCourse}>Change</button>

      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;