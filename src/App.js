import './App.css';
import {api} from './API'
import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Main } from './Components/Main'


import { Hey } from './Components/Hey';
import {Photos} from './Components/Photos'




function App() {

const[posts, setPosts] = useState([]);
const[photos, setPhotos] = useState([]);
const[loading, setLoading] = useState(false);


useEffect(()=>{
    loadAlbums();
    loadPhotos();
},[]);

const loadAlbums = async ()=>{
  setLoading(true);
  let json = await api.getAllPosts();
  setPosts(json);
  setLoading(false);
}

const loadPhotos = async () => {
  setLoading(true);
  let json = await api.getAllPhotos();
  setPhotos(json);
  setLoading(false);
}


  return (

    <div className="App">

    {loading &&

    <h1> Loading </h1>

    }


    <Routes>

      <Route path='/hey/:slug' element={<Hey posts={posts} photos={photos}/>}></Route>
      <Route path='/' element={<Main  posts={posts} loading={loading}/>}></Route>
      <Route path='/photo/:slug' element={<Photos  photos={photos}/>}></Route>

    </Routes>




    </div>
  );
}

export default App;
