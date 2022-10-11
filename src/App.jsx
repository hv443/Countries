import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header setDarkMode={setDarkMode} />
      <HomePage />
    </div>
  );
}

export default App;
