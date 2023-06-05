import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const history = useHistory();
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext); 

  const [name,setName] = useState('');
  const [category,setCategory] =  useState('');
  const [price,setPrice] = useState('');
  const [image,setImage] = useState(null);

  const date = new Date();

  //function for handling the upload of image and submitting of datas
  const submitHandle = ()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          image : url,
          userId : user.uid,
          dateOfPosted : date.toDateString()
        }).then(()=>{
          history.push('/')
        })
      });
    });
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>{
                setName(e.target.value);
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              className="input" 
              type="number" 
              value={price}
              onChange={(e)=>{
                setPrice(e.target.value);
              }}
              id="fname" 
              name="Price" 
            />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={submitHandle} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
