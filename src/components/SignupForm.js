import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  
  const { signup } = userAuth();
  const history = useHistory();

  async function handaleSubmit(e) {
    e.preventDefault();
    //do validation
    if(password !== confirmPassword ) {
      return setError("Password don't mathc!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Faild to create an accont!");
            
    }
  }


  return (
    <Form style={{height: '500px'}} onSubmit={handaleSubmit}>
      <TextInput type="text" placeholder="Enter name" required icon="person" value={username} onChange={(e) => setUsername(e.target.value)} />

      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email} required
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />

      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox text="I agree to the Terms &amp; Conditions" required value={agree} onChange={(e) => setAgree(e.target.value)} />

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className='error'>{error}</p>}
      
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  )
}