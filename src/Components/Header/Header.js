import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);

  return (
    <div className="headerParentDiv" >
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
            <div style={{marginTop:'-2px'}} className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* <span>{user ? user.displayName : "Login"}</span> */}
          {user ? <span>{ user.displayName }</span> : <span onClick={()=>{
            history.push('/login');
          }}>Log In</span>}
          <hr />
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut().then(()=>{
            history.push('/login')
          });
        }}>Log Out</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              history.push('/create')
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
