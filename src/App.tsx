import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import History from "./components/History";
import SearchBar from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { useGallery } from "./hooks/useGallery";
import { useHistory } from "./hooks/useHistory";
import { searchPhotos } from "./services/api";
import { SearchResult } from "./types";
import LoadingGallery from "./components/LoadingGallery";

function App() {
  const [lastSearch, setLastSearch] = useState("");
  const history = useHistory((state) => state);
  const gallery = useGallery((state) => state);
  const { data, fetchData, isLoading } = useFetch<SearchResult>(searchPhotos);

  function handleSearchBarSubmit(query: string) {
    fetchData(query);
    history.push(query);
    setLastSearch(query);
  }

  useEffect(() => {
    if (data !== undefined) {
      gallery.setItems(data.results);
    }
  }, [data]);

  return (
    <>
      <header className="py-10 bg-white flex flex-col items-center px-5 md:px-0">
        <h1 className="text-4xl mt-10 text-center">WELCOME TO MY GALLERY</h1>
        <SearchBar handleSearchBarSubmit={handleSearchBarSubmit} />
      </header>

      <main className="py-7 mx-5 md:container md:mx-auto">
        <History history={history.items} />
        <div className="h-[1px] bg-gray-300"></div>
        {isLoading ? (
          <LoadingGallery />
        ) : (
          <Gallery items={gallery.items} query={lastSearch} />
        )}
      </main>
    </>
  );
}

export default App;
