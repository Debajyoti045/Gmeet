import React from "react";

export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "6vh",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "10px", color: "black", fontSize: "20px" }}>
          Meeting code
        </span>
        <span style={{ marginRight: "10px", color: "black", fontSize: "20px" }}>
          1:00 AM, Wed, March 22
        </span>
      </div>
      <div style={{ background: "#4f4f4f", height: "85vh" }}></div>
      <div
        style={{
          height: "6vh",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/97-512.png"
          alt="mic"
          style={{ height: "30px" }}
        />
        <img
          src="https://th.bing.com/th/id/OIP.5XhYzPtwcY00X1SkP8jRWwHaHa?rs=1&pid=ImgDetMain"
          alt="camera"
          style={{ height: "30px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1iKSAXIHMGhyuGyCO2KiA8Pw2LaIItb9LQ&usqp=CAU"
          alt="share"
          style={{ height: "40px" }}
        />
        <img
          src="https://www.pngkey.com/png/detail/13-137208_phone-icon-png.png"
          alt="endcall"
          style={{ height: "35px" }}
        />
        <img
          src="https://www.kindpng.com/picc/m/79-799937_two-users-two-user-icon-png-transparent-png.png"
          alt="people"
          style={{ height: "30px" }}
        />
        <img
          src="https://th.bing.com/th/id/OIP.0h_snZYE2vswVNmt8-c4wwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
          alt="message"
          style={{ height: "30px" }}
        />
      </div>
    </div>
  );
}
