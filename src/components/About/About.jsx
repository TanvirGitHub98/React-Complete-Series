import './About.css'

const About=(props)=>{
    console.log(props.user)
    return(
        <div className='header1'>
            <h2 id='title'>I am from About</h2>
            <h2> Name: {props.user.name}</h2>
            <h2> Name: {props.user.age}</h2>
            <h2> Name: {props.user.profession}</h2>
            <button onClick={props.alertMsg}>Click Me</button>

        </div>
    )
}

export default About;