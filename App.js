import React, { useState, useEffect } from "react"
import Axios from "axios"
import Bounty from "./showBounty"
import Add from "./AddBounty"
export default function App(){


const [bounty, setBounty] = useState([])


useEffect(() => {
    Axios.get("/bounty")
    .then(res => setBounty(res.data))
    .catch(err => console.log(err))
}, [])
console.log(bounty)

function AddBounty(newBounty){
    Axios.post("/bounty", newBounty)
        .then(res => setBounty(prevBounties =>[...prevBounties, res.data]))
        .catch(err => console.log(err))
}


function DeleteBounty(BountyId){
    Axios.delete(`bounty/${BountyId}`)
        .then(res => setBounty(prevBounties => prevBounties.filter(bounty => bounty._id !== BountyId)))
        .catch(err => console.log(err))
}

function EditBounty(updates, BountyId){
    Axios.put(`/bounty/${BountyId}`, updates)
    .then(res => setBounty(prevBounties => prevBounties.map(bounty => bounty._id !== BountyId ? bounty : res.data)))
    .catch(err => console.log(err))
}



return(
    <div className= "largeDiv">
        <h1>Bounty Hunter Project</h1>
        <div className ="submit"><Add submit = {AddBounty} btnText="Add Bounty"/></div>
        <div className = "result">{bounty.map(bounty => <Bounty {...bounty} key = {bounty._id} DeleteBounty={DeleteBounty} EditBounty={EditBounty}/>)}</div>
    </div>
)
}
