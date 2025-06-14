"use server";

import React from "react";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  button: React.CSSProperties;
} = {
  loginForm: {
    minWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: "2rem",
  },
  description: {
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export const IndexWidget = (props: { heading: string; description: string }) => {
  const handleRedirect = () => {
    window.location.replace("https://web.project-snake.win");
  };

  return (
    <main style={styles.loginForm}>
      <div style={{ padding: "2rem" }}>
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        <a
          href="https://web.project-snake.com"
          style={styles.button}
          target="_blank">
          Go to Project Snake
        </a>
      </div>
    </main>
  );
};