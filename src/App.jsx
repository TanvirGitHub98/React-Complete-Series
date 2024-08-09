import { useState } from 'react'
import About from './components/About/About'
import AddToCart from './components/AddToCart/AddToCart'
import FetchApi from './components/FetchApi/FetchApi'
import FetchApiWithLocalData from './components/FetchApiWithLocalData/FetchApiWithLocalData'
import Products from './components/Products/Products'
import UseEffect from './components/UseEffect/UseEffect'
import UseState from './components/UseState/UseState'
//pass obj, array and function as props
function App() {
  const [cartData,setCartData]=useState([])

  const placementFunc=(singleData)=>{
    const newData=[...cartData,singleData]
    setCartData(newData)
   
  }

  return (
    <div className='flex border border-yellow-500 mx-5 my-5 gap-x-20'>
     <Products placementFunc={placementFunc} />
     {
      cartData.map(data=>
        <AddToCart data={data}/>
      )
     }
     
    </div>
  )
}

export default App
