import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

interface Props {
  handleSearchBarSubmit: (query: string) => void;
}
function SearchBar(props: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onSubmit() {
    if (!inputRef.current) {
      return;
    }
    const value = inputRef.current.value;
    if (value.length > 0) {
      props.handleSearchBarSubmit(value);
      inputRef.current.value = "";
    }
  }

  return (
    <form
      className="my-10 border-b-2 border-b-black w-full max-w-[600px] flex"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        ref={inputRef}
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
