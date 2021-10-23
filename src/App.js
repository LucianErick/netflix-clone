import Home from "./Pages/Home";
import "./App.css";
import "./fonts/fonts-styles.css";

import FavoriteProvider from "./contexts/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <Home />
    </FavoriteProvider>
  );
}

export default App;
