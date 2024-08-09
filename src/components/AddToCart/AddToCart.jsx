
const AddToCart=({data})=>{
    const {name,profession}=data
    return(
        <div className="border border-red-600 grid-cols-4">
          <h1>{name}</h1>
          <h1>{profession}</h1>
        </div>
    )
}
export default AddToCart;