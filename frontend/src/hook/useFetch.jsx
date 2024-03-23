import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState()

    useEffect(() => {
        const getData =async() => {
            try {
                await axios.get(url)
                .then(res=>setData(res.data))
                .catch(console.log('hato'))
            }
            catch {
                console.log('hato');
            }
        }

        getData()
    }, [url])

    return [data]
}
export default useFetch