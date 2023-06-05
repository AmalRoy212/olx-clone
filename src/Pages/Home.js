import React, { useContext, useEffect } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { LoadingContext } from '../store/LodingContext';

function Home(props) {
  const { setLoading } = useContext(LoadingContext);
  useEffect(()=>{
    setLoading(false);
  },[]);

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
 
