import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    skill: "",
    gender: "",
    email: "",
    university: "",
  });

  async function getData() {
    const response = await axios.get("https://nodeproject-backend-thox.onrender.com");
    setData(response.data);
  }

  function handleClick() {
    getData();
    setLoading(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post(
      "http://localhost:3000/students",
      formData
    );
    if (response.status === 200) {
      setFormData({ fullName: "", branch: "" });
    }
  }

  function handleChange(event) {
    const { name, gender, skill } = event.target;
    setFormData((prev) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  }

  return (
    <div className="App">
      <h1>Students</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          value={formData.skill}
          name="skill"
          id="skill"
          placeholder="Enter skill"
          onChange={handleChange}
        />
        <input
          value={formData.gender}
          name="gender"
          id="gender"
          placeholder="Enter gender"
          onChange={handleChange}
        />
        <input
          value={formData.email}
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          value={formData.university}
          name="university"
          id="university"
          placeholder="Enter university"
          onChange={handleChange}
        />
        <button type="submit">add student</button>
      </form>

      <button onClick={handleClick}>get details</button>
      {loading && data.length > 0 && (
        <div>
          <h4>Students List</h4>
          <ol>
            {data.map((student, index) => (
              <li key={index}>
                {student.name} - {student.skill}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;
