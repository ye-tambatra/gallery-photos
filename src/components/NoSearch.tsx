import Notice from "./Notice";

function NoSearch() {
  return (
    <Notice
      title={<span className="text-5xl">Search photo</span>}
      subtitle={`Type something and submit.`}
      description={
        <span>
          The results will be displayed <br />
          here.
        </span>
      }
    />
  );
}

export default NoSearch;
