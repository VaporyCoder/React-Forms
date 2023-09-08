import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        
    } catch (error) {
        setError(error.message)
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br></br>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br></br>
        <button>Send your data over I promise not to steal it >:)</button>
      </form>
    </>
  );
}
