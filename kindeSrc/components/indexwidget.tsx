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
    marginBottom: "2.5rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1.5rem",
  },
};

export const IndexWidget = (props: { heading: string; description: string, button: string, link: string }) => {
  return (
    <main style={styles.loginForm}>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        <a
          href={props.link}
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.button}
        </a>
      </div>
    </main>
  );
};