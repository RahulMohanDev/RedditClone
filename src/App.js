import React from "react";
import './App.css';
import { ThemeProvider } from "./CustomHooksAndOtherUtils/ThemeContext.jsx";

import Test from "./Components/Test.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="center">
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;
