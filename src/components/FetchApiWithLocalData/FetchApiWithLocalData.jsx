import { useEffect, useState } from "react";

const FetchApiWithLocalData=()=>{
    const [fakeData,setFakeData]=useState([])
    useEffect(()=>{
        fetch('FakeData.json')
        .then(res=>res.json())
        .then(data=>setFakeData(data))
    },[])
    return(
        <div>
            {
                fakeData.map(singleData=>(
                    <div>
                        <h1>{singleData.id}</h1>
                        <h1>{singleData.name}</h1>
                        <h1>{singleData.profession}</h1>
                        <h1>{singleData.age}</h1>
                        <h1>{singleData.image}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export default FetchApiWithLocalData; 