import './App.css';
import {api} from './API'
import { useEffect, useState } from 'react';
import { Albums } from './Components/albums';


function App() {

const[posts, setPosts] = useState([]);

useEffect(()=>{
    loadAlbums();
},[]);

const loadAlbums = async ()=>{
  let json = await api.getAllPosts();
  setPosts(json);
}


  return (
    <div className="App">

      {posts.map((item, index)=>(
        <Albums posts={item} key={index}/>
      ))}

      

    </div>
  );
}

export default App;
