import React from 'react';

export default function Message({ messages }) {
  return (
     <div style={{display:"inline"}}>
          {messages}
     </div>
  );
}