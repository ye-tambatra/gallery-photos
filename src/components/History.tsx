interface Props {
  history: string[];
  handleHistoryItemClick: (item: string) => void;
}
function History(props: Props) {
  const { history, handleHistoryItemClick } = props;

  return (
    <>
      <h5 className="font-semibold text-center">History</h5>
      <div className="flex justify-center my-7 flex-wrap">
        {history.map((item, i) => (
          <button
            onClick={() => handleHistoryItemClick(item)}
            className="mx-3 border bg-white border-blue-500 px-6 py-1 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-150 hover:cursor-pointer my-2 md:my-0"
            key={i}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default History;
