import Skeleton from "react-loading-skeleton";

function LoadingGallery() {
  function renderSkeleton() {
    const skeleton = [];
    for (let i = 0; i < 8; i++) {
      skeleton.push(<Skeleton className="w-full h-[350px]" />);
    }
    return skeleton;
  }

  return (
    <>
      <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {renderSkeleton()}
      </div>
    </>
  );
}

export default LoadingGallery;
