import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NoResult() {
  return (
    <div className="my-10 text-center">
      <FontAwesomeIcon icon={faFileLines} className="text-5xl mt-10" />
      <h1 className="text-2xl mt-5 mb-2">No result found for "Car"</h1>
      <span className="text-gray-500">
        There is no result matching <br /> your search
      </span>
    </div>
  );
}

export default NoResult;
