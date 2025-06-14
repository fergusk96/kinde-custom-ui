"use client";

import React from "react";
import { LogIn } from "lucide-react";
import { useKindeAuth, KindeProvider } from "@kinde-oss/kinde-auth-react";

export const LoginButton: React.FC = () => {
    const { login} = useKindeAuth();

    return (
        <>
            <KindeProvider
                clientId="3354879266344193b64d6d5a3a79073e"
                domain="https://auth.project-snake.win"
                logoutUri="https://web.project-snake.win"
                redirectUri="https://web.project-snake.win"
                children={undefined}
            ></KindeProvider>
            <button
                onClick={() => login()}
                style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    background: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <LogIn style={{ marginRight: "0.5rem", height: "1rem", width: "1rem" }} />
                Login
            </button>
        </>
    );
};