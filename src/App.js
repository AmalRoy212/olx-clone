import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Load from './store/LodingContext';
import Products from './Pages/Products';

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
    <div>
      <Load>
        <Post>
          <Router>
            {/* home page  */}
            <Route exact path='/'>
              <Home />
            </Route>

            {/* //sign up  */}
            <Route path='/signup'>
              <Signup />
            </Route>

            {/* login page  */}
            <Route path='/login'>
              <Login />
            </Route>

            {/* sell button functionalites */}
            <Route path='/create'>
              <Create />
            </Route>

            {/* onclick on post want to show the detils of the product  */}
            <Route path='/view'>
              <View />
            </Route>

            {/* produtcs page  */}
            <Route path='/products'>
              <Products />
            </Route>
          </Router>
        </Post>
      </Load>
    </div>
  );
}

export default App;
