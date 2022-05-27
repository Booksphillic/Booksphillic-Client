import React,{useEffect, useState} from 'react'
import axios from 'axios'

const MisteryReview = () => {
    const [review, setReview]=useState([])
    useEffect(() => {
      axios.get("/api/pick-up/1/pickupList")
        .then((res)=>{
        console.log(res.data);
        setReview(res.data.data)
    }
        )
     
    }, [])
    
  return (
    <div>MisteryReview</div>
  )
}

export default MisteryReview