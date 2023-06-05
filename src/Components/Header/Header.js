import React, { useContext, useEffect, useState } from 'react';

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
  const [showSearch,setShowSearch] = useState(false);
  const [searchData,setSearchData] = useState('');
  let allSearch = [];

  //function for keeping the search history
  const searchHistoryHandler = ()=>{
    firebase.firestore().collection('searches').add({
    }).then(()=>{
      history.push('/products');
    })
  }

  useEffect(()=>{
    firebase.firestore().collection('searches').get().then((snapshot)=>{
      snapshot.docs.map((searches)=>{
        allSearch.push(searches.data());
      })
    })
  })

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
              value={searchData}
              onFocus={()=>{
                setShowSearch(true);
              }}
              onChange={(e)=>{
                setSearchData(e.target.value)
              }}
            />
          </div>
          <div className="searchAction" onClick={searchHistoryHandler}>
            <Search color="#ffffff"></Search>
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
      {showSearch && <div style={{height:'50vh',width:"100%",justifyContent:'center',display:'flex',background:'none',zIndex:'3'}}
        onMouseLeave={()=>{
          setShowSearch(false)
        }}
        
      >
        <div style={{backgroundColor:'#bbc1c9',width:'44.5%',height:'100%',marginLeft:'-1.5rem'}}>
          {allSearch.forEach((search)=>{
            <h3>hi{search.searchData}</h3>
          })}
        </div>
      </div>}
    </div>
    
  );
}

export default Header;
