"use server";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.replace("https://web.project-snake.win");
  }, [navigate]);

  return null;
}