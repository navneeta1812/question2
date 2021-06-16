import React from 'react'
import './styles.css'

export const ProfileCard = ({profileDetails}) => {
  return (
    <div className="container">
        <img src={profileDetails.avatar} />
        <div>
          <h3>{profileDetails.first_name+" "+profileDetails.last_name}</h3>
          <p>{profileDetails.email}</p>
        </div>
        
    </div>
  )
}
