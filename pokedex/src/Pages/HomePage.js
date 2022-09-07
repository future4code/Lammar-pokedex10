import React, { useEffect } from "react";
import UseRequestData from "../Hooks/UseRequestData";
import { BASE_URL } from "../Constants/Constants";
import {useNavigate} from "react-router-dom";





const HomePage = () =>{

    const navigate = useNavigate()

    
    const [data, isLoading] = UseRequestData(`${BASE_URL}/`)
    const card = data&&data.results&&data.results.map((results)=>{
        return (
            <p>{results.url}</p>
        )
    })
    console.log()
    return (
        <>
        <p>Home</p>
        {isLoading&&"...carragando"}
        <ul>
            {!isLoading&&data&&card}
        </ul>
        </>
    )
}

export default HomePage;