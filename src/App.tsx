// import Gallery from "./components/Gallery";
import History from "./components/History";
import NoResult from "./components/NoResult";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <header className="py-10 bg-white flex flex-col items-center px-5 md:px-0">
        <h1 className="text-4xl mt-10 text-center">WELCOME TO MY GALLERY</h1>
        <SearchBar />
      </header>

      <main className="py-7 mx-5 md:container md:mx-auto">
        <History />
        <div className="h-[1px] bg-gray-300"></div>
        {/* <Gallery /> */}
        <NoResult />
      </main>
    </>
  );
}

export default App;
