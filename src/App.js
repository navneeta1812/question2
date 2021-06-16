import React, { useState,useEffect } from  'react';
import './App.css';
import { ProfileCard } from './ProfileCard/ProfileCard';

function App() {

  const [profileData, setprofileData] = useState([])

  const [page, setpage] = useState(1)

  useEffect(() => {
   
    fetch("https://reqres.in/api/users?page="+page).then(res=>{
      if(res.ok){
        return res.json();
      }
    
    }).then(data =>{
      setprofileData(data.data)
      console.log(data.data)
    }).catch(err =>{
      alert("Error Occured : "+err);
    })

  }, [page])

  return (
    <div className="App">

      {

        profileData.map(profile =>(
          <ProfileCard
          profileDetails={profile} />
        ))
      }

      <h5>{'Page : '+page}</h5>
   

      <div className='buttonContainer'>
        <button onClick={()=>{
          if(page!=1){
            setpage(1)
          }
        }}>Previous Page</button>
        <button onClick={()=>setpage(2)}>Next Page</button>
      </div>
    </div>
  );
}

export default App;
