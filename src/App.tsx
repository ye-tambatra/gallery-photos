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
import NoSearch from "./components/NoSearch";
import NoResult from "./components/NoResult";
import Error from "./components/Error";

function App() {
  const [lastSearch, setLastSearch] = useState("");
  const history = useHistory((state) => state);
  const gallery = useGallery((state) => state);
  const { data, fetchData, isLoading, hasError } =
    useFetch<SearchResult>(searchPhotos);

  function runSearch(query: string) {
    fetchData(query);
    history.push(query);
    setLastSearch(query);
  }

  function handleSearchBarSubmit(query: string) {
    runSearch(query);
  }

  function handleHistoryItemClick(item: string) {
    runSearch(item);
  }

  useEffect(() => {
    if (data !== undefined) {
      gallery.setItems(data.results);
    }
  }, [data]);

  function renderMainContent() {
    if (hasError) {
      return <Error />;
    }

    if (isLoading) {
      return <LoadingGallery />;
    }

    if (gallery.items.length === 0) {
      // The user did not search anything yet
      if (lastSearch.length === 0) {
        return <NoSearch />;
      }
      // The user searched but there is no result matching it
      return <NoResult query={lastSearch} />;
    }

    return <Gallery items={gallery.items} query={lastSearch} />;
  }

  return (
    <>
      <header className="py-10 bg-white flex flex-col items-center px-5 md:px-0">
        <h1 className="text-4xl mt-10 text-center">
          WELCOME TO MY <span className="text-blue-500">PHOTO SEARCH APP</span>
        </h1>
        <SearchBar handleSearchBarSubmit={handleSearchBarSubmit} />
      </header>

      <main className="py-7 mx-5 md:container md:mx-auto">
        <History
          history={history.items}
          handleHistoryItemClick={handleHistoryItemClick}
        />
        <div className="h-[1px] bg-gray-300"></div>
        {renderMainContent()}
      </main>
    </>
  );
}

export default App;
