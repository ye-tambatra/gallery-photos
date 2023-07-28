import { Photo as IPhoto } from "../types";

type Props = {
  item: IPhoto;
};
function Photo(props: Props) {
  const imageURL = props.item.urls.small;

  return (
    <img
      alt="Photo"
      src={imageURL}
      className="bg-gray-300 h-auto w-full object-cover mb-5 shadow-md"
    />
  );
}

export default Photo;
