import './Home.css'
const Home=()=>{
    const update=()=>{
        console.log("oioioi")
        // var getData=document.getElementsByClassName('header90')[0].innerText='I am Changed'
         var getData=document.getElementById('header90').innerText='I am Changed'
         

    }
    return(

        <div>
            <h1 className="header90" id='header90'>I am from Home Component</h1>
            <button onClick={update}>Click Me</button>
        </div>
    )
}

export default Home;