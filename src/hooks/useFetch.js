import { useState } from "react";

const useFetch = (dataFn) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getResponse = (url, options) => {
    setLoading();
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        dataFn(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    setLoading(false);
  };

  return [error, loading, getResponse];
};

export default useFetch;
