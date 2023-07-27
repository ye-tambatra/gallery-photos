const histories = ["Car", "Bird", "Paris", "Flyers", "Bike"];

function History() {
  return (
    <>
      <h5 className="font-semibold text-center">History</h5>
      <div className="flex justify-center my-7 flex-wrap">
        {histories.map((history, i) => (
          <span
            className="mx-3 border bg-white border-blue-500 px-6 py-1 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-150 hover:cursor-pointer my-2 md:my-0"
            key={i}
          >
            {history}
          </span>
        ))}
      </div>
    </>
  );
}

export default History;
