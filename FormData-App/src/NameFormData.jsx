import { useState } from "react";

export default function NameFormData() {
  const [formData, setformData] = useState({
    name: "",
    age: 0,
    profession: "",
  });
  const [personprofiles, setPersonProfile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh and form submit
    console.log("ENV::", e);

    if (formData.name && formData.age && formData.profession) {
      setPersonProfile([...personprofiles, formData]);
      //empty form
      setformData({ name: "", age: 0, profession: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  function handleChange(e) {
    console.log("Change ENV", e);
    const { name, value } = e.target;
    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div clasName="form-group mb-2">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter You Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div clasName="form-group mb-2">
          <input
            className="form-control"
            name="age"
            type="number"
            placeholder="Enter Age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <div clasName="form-group">
          <input
            className="form-control"
            name="profession"
            type="text"
            placeholder="Enter You Profession"
            onChange={handleChange}
            value={formData.profession}
          />
        </div>
        <button clasName="btn btn-primary mt-2">Submit</button>
      </form>
      <ul>
        {personprofiles.map((p, index) => (
          <li key={index}>{p.name}: {p.age} : {p.profession}</li>
        ))}
      </ul>
    </div>
  );
}
