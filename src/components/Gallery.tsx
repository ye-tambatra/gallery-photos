import { Photo as IPhoto } from "../types";
import NoResult from "./NoResult";
import NoSearch from "./NoSearch";
import Photo from "./Photo";

type Props = {
  items: IPhoto[];
  query: string;
};
function Gallery(props: Props) {
  if (props.items.length === 0) {
    if (props.query.length === 0) {
      return <NoSearch />;
    }

    return <NoResult query={props.query} />;
  }

  return (
    <>
      <h4 className="text-center text-3xl my-10">
        Search results for "{props.query}"
      </h4>
      <div className="my-7 columns-1 md:columns-2 lg:columns-4 gap-5">
        {props.items.map((item, index) => (
          <Photo key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
