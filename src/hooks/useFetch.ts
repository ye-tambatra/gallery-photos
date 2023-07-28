import { useState } from "react";

function useFetch<T>(fetcher: (...args: any[]) => Promise<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function fetchData(...args: any[]) {
    setIsLoading(true);
    setHasError(false);
    fetcher(...args)
      .then((data) => setData(data))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }

  return {
    data,
    fetchData,
    isLoading,
    hasError,
  };
}

export { useFetch };
