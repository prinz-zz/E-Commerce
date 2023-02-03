import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";



export default function useFetch(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url)
                setData(res.data.data);
                console.log(res.data.data);
            } catch (err) {
                setError(true)
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {data, loading, error}
}
