import Notice from "./Notice";

type Props = {
  query: string;
};
function NoResult(props: Props) {
  return (
    <Notice
      title={"OOPS !"}
      subtitle={`No search results for "${props.query}"`}
      description={
        <span>
          There are no result matching <br />
          your search.
        </span>
      }
    />
  );
}

export default NoResult;
