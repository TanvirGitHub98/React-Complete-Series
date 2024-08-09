
const Product=({singleData,placementFunc})=>{
    const {name,age,profession}=singleData;
    return (
        <div className="border-2 border-red-600 px-5 py-5">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{profession}</h3>
            <button className="bg-green-600 m-5 p-2 text-white" onClick={()=>placementFunc(singleData)}>Add To Cart</button>

        </div>
    )
}

export default Product;