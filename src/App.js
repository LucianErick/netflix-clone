import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import "./App.css";
import FavoriteProvider from "./contexts/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <Home />
    </FavoriteProvider>
  );
}

export default App;
