import React, { useContext, useEffect } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { LoadingContext } from '../store/LodingContext';
import { AuthContext } from '../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Home(props) {
  const { setLoading } = useContext(LoadingContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  useEffect(()=>{
    if(!user){
      history.push('/login');
    }
    setLoading(false);
  });

  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
