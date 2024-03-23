import React from 'react';

export default function Message({ messages }) {
  return (
     <div style={{color:"white",fontSize:"30px",display:"block"}}>
          {messages}
     </div>
  );
}