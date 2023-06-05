import React, { useState, useContext, useEffect } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { LoadingContext } from '../../store/LodingContext';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const { loading, setLoading } = useContext(LoadingContext);

  //useEffect used for managing the loading
  useEffect(()=>{
    setLoading(false)
  });

  //fucntion for handling the login
  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  return (

    loading ?
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
        <ClipLoader
          color={"#0D82D8"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      :
      <div>
        <div className="loginParentDiv">
          <img alt='logo' width="200px" height="200px" src={Logo}></img>
          <form onSubmit={loginHandler}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="fname"
              name="email"
              defaultValue="John"
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="lname"
              name="password"
              defaultValue="Doe"
            />
            <br />
            <br />
            <button>Login</button>
          </form>
          <p onClick={()=>{
            history.push('/signup')
          }}>Signup</p>
        </div>
      </div>


  );
}

export default Login;
