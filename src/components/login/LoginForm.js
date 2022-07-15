import "./LoginForm.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../app/authSlice";

const LoginForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    //validate on client side email and pw
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const emailValid = email.length > 0;
    const pwValid = password.length > 0;
    if (!emailValid) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
    if (!pwValid) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }

    //complete validation
    if (emailValid && pwValid) {
      //send request to server
      const supabase = createClient(
        "https://bvdfbzafkqrigsrqsvul.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZGZiemFma3FyaWdzcnFzdnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4NjU0NDQsImV4cCI6MTk3MzQ0MTQ0NH0.r8wEKoUqgiDbwMGqcrvF53gsFan0pWoaD8LCfKztDVQ"
      );
      async function signInWithEmail() {
        const { user, session, error } = await supabase.auth.signIn({
          email: email,
          password: password
        });
        if (!error) {
          //login successful, store user data in store
          console.log(user, session);
          dispatch(
            login({
              user_id: user.user_id,
              access_token: session.access_token
            })
          );
          //navigate back to dashboard
          navigate("/dashboard", { replace: true });
        }
      }
      signInWithEmail();
    }
  };

  return (
    <form onSubmit={loginHandler} className="login-form">
      <h1>Login</h1>
      <div className={emailValid ? "form-control" : "form-control invalid"}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" name="email" />
      </div>
      <div className={passwordValid ? "form-control" : "form-control invalid"}>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div className="login-links">
        <Link to="#">Sign Up</Link>
        <Link to="#">Forgot Password</Link>
      </div>
      <button type="submit" className="login-submit">
        Sign In
      </button>
    </form>
  );
};
export default LoginForm;
