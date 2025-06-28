import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("Leroy");
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh and form submit
    console.log("ENV::", e);
    setNames([...names, name]);
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter You Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button clasName="btn btn-primary mt-2">Submit</button>
      </form>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
