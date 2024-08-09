import { useEffect, useState } from "react";
import Product from '../Product/Product';

const Products=({placementFunc})=>{
    const [addToCart,setAddToCart]=useState([]);
    useEffect(()=>{
        fetch('FakeData.json')
        .then(res=>res.json())
        .then(data=>setAddToCart(data))

    },[])
    return (
        <div className="grid grid-cols-3 gap-2 my-5 mx-5">
            {
                addToCart.map(singleData=>
                    <Product
                    key={singleData.id}
                    singleData={singleData}
                    placementFunc={placementFunc} />
                )
            }
          

        </div>
    )
}

export default Products;