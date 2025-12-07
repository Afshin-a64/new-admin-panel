import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = (url, refFunction=()=>{}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.status != 200) throw new Error("خطا در دریافت اطلاعات ...");
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
      refFunction()
  }, [url]);

  return {data, loading, error}
};
