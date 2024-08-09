import { useEffect, useState } from "react";
//import './FetchApi.css'
const FetchApi=()=>{
  const [allData,setAllData]=useState([]);
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(singleData=>setAllData(singleData))
  },[])
    return(
        <div className='grid-cols-3'>
            {
                allData.map(data=> (
                    <div key={data.id} className="Single-User">
                        <h1 className="text-3xl">{data.name}</h1>
                        <p className="text-2xl">{data.website}</p>
                    </div>

                ))
            }


        </div>
    )
}
export default FetchApi;