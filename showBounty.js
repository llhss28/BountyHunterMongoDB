import React, {useState} from "react"
import Add from "./AddBounty"

export default function Bounty(props){
    const {FirstName, LastName, BountyAmount, type, _id} = props
    const [editToggle, setToggle] = useState(false)
    return(

        <div className = "test">
            {!editToggle?

            <>
            Bounty Amount: {BountyAmount}<br />
            Name: { FirstName} {LastName}<br />
            Order: {type}<br/>
            <button className= "deletebutton" onClick={() => props.DeleteBounty(_id)}>Delete</button>
            <button className = "editbutton" onClick = {() => setToggle(prevToggle => !prevToggle)}>Edit</button>
            </>

            :

            <>
            <Add FirstName={FirstName} LastName={LastName} BountyAmount={BountyAmount} type={type} btnText="Submit Edit" _id={_id} submit={props.EditBounty} close={setToggle}/>
            <button className= "deletebutton" onClick = {() => setToggle(prevToggle => !prevToggle)}>Close</button>
            </>

            }
        </div>

    )
}
