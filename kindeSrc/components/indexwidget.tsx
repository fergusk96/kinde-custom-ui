"use server";

import React from "react";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
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
};

export const IndexWidget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={{ padding: "2rem" }}>
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>my description</p>
      </div>
    </main>
  );
};
