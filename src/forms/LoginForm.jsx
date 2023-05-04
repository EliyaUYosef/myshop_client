import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (event) => {
    event.preventDefault();
    // handle login logic here, e.g. submit form data to server or authenticate locally
    console.log(`Submitted login: ${username} - ${password}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginForm}>
        <div>
          <label htmlFor="username">Username/Email/Phone:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
