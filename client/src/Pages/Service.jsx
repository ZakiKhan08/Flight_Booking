import React, { useEffect, useState } from 'react'
import axios from "axios"

const Service = () => {

let [showData,setshowData] = useState([]);
let api = "http://localhost:3000/hotel";

useEffect(()=>{

axios.get(api).then((e)=>{
console.log(e.data)
setshowData(e.data)
})

},[])
  return (
    <table>
<thead>
  <tr>
  <th>Name</th>
  <th>Number</th>
  <th>AAdhar No.</th>
  <th>Check-in</th>
  <th>Check-out</th>
  </tr>
  </thead>
  <tbody>

  {showData.map((e)=>{
    
    return(
    <tr>
      <td>{e.name}</td>
      <td>{e.number}</td>
      <td>{e.aaadharno}</td>
      <td>{e.checkin}</td>
     
    
    </tr>
    )


  })}
  </tbody>
    </table>
  )
}

export default Service