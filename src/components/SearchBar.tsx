import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  function handleFormSubmit() {}

  return (
    <form
      className="my-10 border-b-2 border-b-black w-full max-w-[600px] flex"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
      }}
    >
      <input
        placeholder="What are you looking for ?"
        type="text"
        className="pb-2 pt-4 pr-3 w-full outline-none"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchBar;
