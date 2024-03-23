import React from 'react';
import shareImage from "./share.jpg";
export default function User({ name }) {
  return (
    <div style={{ background: "white", height: "40vh", width: "40vh", marginTop: "8px",marginLeft:"70px",marginRight:"20px",marginBottom:"5px"}}>
      <p style={{textAlign:"center"}}>{name}</p>
      <img style={{height:"150px",marginTop:"20px",marginLeft:"60px"}} src={shareImage} alt="pic" />
    </div>
  );
}
