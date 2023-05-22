import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        style={{
          height: "300px",
          width: "400px",
        }}
        src="https://res.cloudinary.com/dhnkuonev/image/upload/v1684778786/EbSKQgVUMAA9OCB_yevfgx.jpg"
        alt="meme"
      />
      <h2>
        Let me take you back&nbsp;
        <a style={{ color: "#f6740a" }} href="/">
          Home
        </a>
      </h2>
    </div>
  );
};

export default ErrorPage;
