import React, { useContext, useEffect } from 'react';
import Login from '../Components/Login/Login';
import { AuthContext } from '../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LoginPage() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  useEffect(()=>{
    if(user){
      history.push('/');
    }
  })
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
