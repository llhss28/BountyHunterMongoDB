import React, {useState} from "react"

export default function Add(props){
    const initInputs = {FirstName: props.FirstName || "", LastName: props.LastName || "", BountyAmount: props.BountyAmount || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.close && props.close(prevState => !prevState)
    }


    return(
        <div>
            <form className="myform" onSubmit = {handleSubmit}>
                <input className = "buttonone" type ="text" name = "FirstName" value = {inputs.FirstName} onChange = {handleChange} placeholder ="First Name"></input>
                <input className = "buttontwo" type ="text" name = "LastName" value = {inputs.LastName} onChange = {handleChange} placeholder ="Last Name"></input>
                <input className = "buttonthree" type ="number" name = "BountyAmount" value = {inputs.BountyAmount} onChange = {handleChange} placeholder ="Bounty Amount"></input>
                <input className = "buttonfour" type ="text" name = "type" value = {inputs.type} onChange = {handleChange} placeholder ="Type"></input><br/>
                <button className="add">{props.btnText}</button>
            </form>
        </div>
    )
}
