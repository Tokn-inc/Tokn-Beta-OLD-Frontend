import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import LaunchActive from "./LaunchActive";
import LaunchQueue from "./LaunchQueue";
import { FiSettings } from 'react-icons/fi';
import SongLibrary from "./Song-library";
import songDetails from "./Database/song-details";

function Launch() {
  return (
    <div className="library launch">
      <style>{'body { background-color: #131313; }'}</style>
    
    <span className="cover-pic">
    <div  className="settingsiconn">     <Link to="/editpage2">
    <FiSettings className="iconset" style={{color: 'white', fontSize: '20px'}}/> </Link></div>
            <div className="alignuser">
            <h4>User Name</h4> 
            <h5>@username</h5></div>
           
        <span className="profile-pic"></span>
       
        
            
            
            <Link to="/upload">
            <button type="button" name="button" class="launch-upload-btn">
                
                Upload
            </button></Link>
            
            <button className="withdrawbutton"> Withdraw</button>
            <div ><div className="earning">Earnings:</div></div> 
            <div className="baramount"><h4>$0.00</h4></div>
      
            </span>
            <div className="navlinebar">
            <p>Profile</p>
            <p>Collection</p>
            <p>Launch</p></div>
          
            <div className="row-posterslib">{songDetails.map(detail =>
            <SongLibrary
                key={detail.id}
                img={detail.img}
                title={detail.title}
                artist={detail.artist}
            />  
        )}</div>
    </div>
  );
}

export default Launch;
