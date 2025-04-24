import React,{useEffect, useState} from "react";
import axios from "axios";



const Dashboard = ()=>{

    const [joke, setjoke] = useState('')
    useEffect(()=>{
        getJoke()
    },[])

    async function getJoke(){

        try{
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
                headers : {
                    Authorization: `Bearer 1afe1399-d2ba-4dd7-9f1f-974459bd52bc`
                }
            })
            console.log(response.data)
            setjoke(response.data.data.message)
        }
        catch(error){
            console.log(error)
        }
    }



    return (
        <div>
            <h1>Dashboard</h1>
            <p>{joke}</p>
        </div>
    )
}


export default Dashboard