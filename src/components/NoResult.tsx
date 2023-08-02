interface Props {
  query: string;
}
function NoResult(props: Props) {
  return (
    <div className="my-10 py-10 text-center pb-10">
      <h1 className="text-5xl mt-7">OOPS !</h1>
      <h2 className="text-2xl mt-5 mb-2">
        No search results for "${props.query}"
      </h2>
      <span className="text-gray-500">
        There are no results matching <br />
        your search.
      </span>
    </div>
  );
}

export default NoResult;
