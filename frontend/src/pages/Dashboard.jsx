import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const token = localStorage.getItem("token");

  const [password, setPassword] = useState({});
  const [course, setCourse] = useState("");

  const updatePassword = async () => {
    await axios.put(
      " https://lallalalal.onrender.com/api/update-password",
      password,
      { headers: { Authorization: token } }
    );
    alert("Password updated");
  };

  const updateCourse = async () => {
    await axios.put(
      " https://lallalalal.onrender.com/api/update-course",
      { course },
      { headers: { Authorization: token } }
    );
    alert("Course updated");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Update Password</h3>
      <input placeholder="Old" onChange={e => setPassword({...password, oldPassword: e.target.value})}/>
      <input placeholder="New" onChange={e => setPassword({...password, newPassword: e.target.value})}/>
      <button onClick={updatePassword}>Update</button>

      <h3>Update Course</h3>
      <input onChange={e => setCourse(e.target.value)} />
      <button onClick={updateCourse}>Change</button>

      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;