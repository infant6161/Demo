import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Button,Card} from "react-bootstrap"

const Rocket = () => {
    const[data, setData]=useState([])
     const getApi =async ()=>{
        const result = await axios.get("https://api.spacexdata.com/v3/rockets")
        setData(result.data)
        console.log("======>",result)
    }
    useEffect(()=>{
        getApi()
    },[])
    return (
        <div >
        <div style={{display:"flex",flexWrap:"wrap" }} >
            {
                data.map((item)=>{
                    return(
                        
                        <div>
                            <Card style={{ width: '18rem',marginLeft:"50px",marginTop:"15px" }}>
  <Card.Img variant="top" src={item.flickr_images} style={{width:"250px",height:"250px", marginLeft:"18px"}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

                        </div>
                        
                    )
                })
            }
        </div>
        </div>
        
    );
};

export default Rocket;