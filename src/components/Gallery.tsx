import Photo from "./Photo";

function Gallery() {
  return (
    <>
      <h4 className="text-center text-3xl my-10">Search results for "Car"</h4>
      <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
          <Photo key={index} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
