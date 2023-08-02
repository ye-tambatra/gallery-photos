import { Photo as IPhoto } from "../types";

interface Props {
  item: IPhoto;
}
function Photo(props: Props) {
  const imageURL = props.item.urls.small;

  return (
    <img
      alt="Photo"
      src={imageURL}
      className="bg-gray-300 h-auto w-full object-cover mb-5 rounded-sm"
    />
  );
}

export default Photo;
