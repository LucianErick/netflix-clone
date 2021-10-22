import { useFavorites } from "../../contexts/FavoriteContext";
import { MovieRow } from "../MovieRow";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page">
      <section className="list">
        <MovieRow title="Meus favoritos" items={favorites} />
      </section>
    </div>
  );
};
