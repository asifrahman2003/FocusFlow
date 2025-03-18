import { useEffect, useState } from "react";
import API_BASE_URL from "./config/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h1>FocusFlow</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
