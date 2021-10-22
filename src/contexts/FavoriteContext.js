import { useEffect, useContext, createContext, useState } from "react";

const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const initialValue = !localStorage.getItem('favorites') ? [] : JSON.parse(localStorage.getItem('favorites'));
  const [favorites, setFavorites] = useState(initialValue);

  return (
    <>
      <FavoriteContext.Provider
        value={{
          favorites,
          setFavorites,
        }}
      >
          {children}
      </FavoriteContext.Provider>
    </>
  );
}

export function useFavorites() {
    const context = useContext(FavoriteContext);
    const {favorites, setFavorites} = context;
    return {favorites, setFavorites}
}