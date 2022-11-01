import "./App.css";
import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>
      <br></br>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
