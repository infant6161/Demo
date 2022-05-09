import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card,ListGroup, ListGroupItem, Row} from 'react-bootstrap';

const Launches = () => {
    const[data, setData]=useState([])
     const getApi =async ()=>{
        const result = await axios.get("https://api.spacexdata.com/v3/launches")
        setData(result.data)
        console.log("+++++++>",result)
    }
    useEffect(()=>{
        getApi()
    },[])
    return (
        <div style={{ display:"flex",flexWrap:"wrap", alignItems:"center", justifyContent:"center"
    }} >
           {
               data.map((item)=>{
                   return(
                      
                       <div>
                         <Card style={{ width: '18rem', margin:"10px" }}>
  <Card.Img variant="top" src={item.links.mission_patch} style={{height:"250px"}}/>
  <Card.Body>
    <Card.Title>Flight Number:{item.flight_number}</Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item> <b> Mission Name:</b> {item.mission_name}</ListGroup.Item>
    <ListGroup.Item><b>Launch Year:</b> {item.launch_year}</ListGroup.Item>
    <ListGroup.Item><b>Launch Data Unix:</b>  {item.launch_date_unix}</ListGroup.Item>
    <ListGroup.Item><b>Launch Date Utc:</b> {item.launch_date_utc}</ListGroup.Item>
    {/* <ListGroup.Item>{item.rocket.first_stage.second_stage.payloads.manufacturer}</ListGroup.Item>
  */}
    <ListGroup.Item><b>Rocket Type:</b> {item.rocket.rocket_type}</ListGroup.Item>
  </ListGroup>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
                       </div>
           
                   )
               })
           }
</div>
        
    );
};

export default Launches;