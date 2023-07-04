import { useEffect, useState } from "react";
import { tmdbApi } from "../utils/tmdb";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading]: any = useState(null);
    const [error, setError]: any = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        tmdbApi(url, '')
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
