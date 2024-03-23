import React, { useState } from "react";
import shareImage from "./share.jpg";
import User from "./User";
import Message from "./Message";

export default function Home() {
  // Dummy data for users
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
    { id: 7, name: "User 7" },
    { id: 8, name: "User 8" },
    { id: 9, name: "User 9" },
    { id: 10, name: "User 10" }
  ];

  // State to hold messages, initially set to null
  const [messages, setMessages] = useState(null);
  // Function to handle message see action
  const msgSee = () => {
    // Dummy messages
    const dummyMessages = ["Message 1", "Message 2", "Message 3"];
    setMessages(dummyMessages);
    alert("Hello")
  };

  return (
    <>
      <div
        style={{
          height: "6vh",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ paddingLeft: "30px", color: "black", fontSize: "25px"}}>
          Meeting code
        </span>
        <span style={{ paddingRight: "30px", color: "black", fontSize: "25px" }}>
          1:00 AM, Wed, March 22
        </span>
      </div>
      <div style={{ background: "#4f4f4f", height: "85vh", display: "flex", flexWrap: "wrap",overflow:"auto"}}>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
        {messages !== null && <Message messages={messages} />}
      </div>
      <div style={{ height: "6vh", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span>
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/97-512.png"
            alt="mic"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.5XhYzPtwcY00X1SkP8jRWwHaHa?rs=1&pid=ImgDetMain"
            alt="camera"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src={shareImage}
            alt="share"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://www.pngkey.com/png/detail/13-137208_phone-icon-png.png"
            alt="endcall"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
        </span>
        <span>
          <img
            src="https://www.kindpng.com/picc/m/79-799937_two-users-two-user-icon-png-transparent-png.png"
            alt="people"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.0h_snZYE2vswVNmt8-c4wwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
            alt="message"
            className="pointer"
            onClick={msgSee}
            style={{ height: "40px", margin: "10px" }}
          />
        </span>
      </div>
    </>
  );
}
