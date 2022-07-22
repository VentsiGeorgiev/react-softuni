import { useEffect, useState } from "react"

const useFetch = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const getData = async () => {
      const res = await fetch("http://localhost:3030/jsonstore/todos/");
      const result = await res.json();
      setIsLoading(false);
      setData(Object.values(result))
    }
    getData();

  }, [url]);

  return [data, setData, isLoading];
}

export default useFetch;