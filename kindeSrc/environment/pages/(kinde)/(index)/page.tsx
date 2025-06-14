import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page() {
  useEffect(() => {
    window.location.replace("https://web.project-snake.win");
  }, []);

  return null;
}