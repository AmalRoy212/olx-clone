import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

function Product() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const [products,setProducts] = useState([]);
  const {setPostDetails} = useContext(PostContext);
  //using use effect for getting the all products from the firebase database
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snap)=>{
      const allPosts = snap.docs.map((product)=>{
        return{
          ...product.data(),
          id : product.id
        }
      });
      setProducts(allPosts);
    })
  },[])
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignContent:'center',paddingTop:'7rem',backgroundColor:'#bbc1c9'}}>
      <div className="cards">
          {
            products.map((product)=>{
              return <div
              className="card"
              onClick={()=>{
                setPostDetails(product);
                history.push('/view');
              }} 
            >
              <div className="favorite">
                {/* <Heart></Heart> */}
              </div>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.dateOfPosted}</span>
              </div>
            </div>
            }
          )}
        </div>
    </div>
  )
}

export default Product
