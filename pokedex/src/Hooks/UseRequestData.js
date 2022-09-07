import axios from "axios";
import React, { useEffect, useState } from "react";


export const UseRequestData = (results) =>{
    const {data, setData} = useState(undefined)
    const {isLoading, setIsLoading} = useState(undefined)
    const [error, setError] = useState(undefined)
    useEffect(()=>{
        setIsLoading(true);
        axios.get(results).then(response=>{
            setIsLoading(false)
            setData(response.data)
        }).catch(error=>{
            setIsLoading(false)
            setError(error)
        })
    },[])
    return [data, isLoading, error]
}

export default UseRequestData;