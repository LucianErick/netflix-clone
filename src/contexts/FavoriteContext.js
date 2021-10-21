import { useContext, createContext, useState } from "react";

const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
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