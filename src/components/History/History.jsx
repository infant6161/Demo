import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
const History = () => {
    const[data,setData]=useState([])
     const getApi =async ()=>{
        const result = await axios.get("https://api.spacexdata.com/v3/history")
        setData(result.data)
        console.log(">>>>>>",result)
    }
    useEffect(()=>{
        getApi()
    },[])
    return (
        <div>
            {
                data.map((item)=>{
                    return(
                        <div style={{ display:"flex", flexWrap:"wrap", marginLeft:"120px", marginTop:"50px",float:"left"}}>
                          
                            <Modal.Dialog >
  <Modal.Header closeButton>
    <Modal.Title>Title:-{item.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p> <b>Event Date Utu:</b> {item.event_date_utc}</p>
    <p> <b> Event Date Unix:</b>{item.event_date_unix} <h5> <b>Flight Number: </b>{item.flight_number}</h5></p>
    <p>  <b>Deatails :</b> {item.details}</p>
    <a href='#'> <b>Link</b> :{item.links.article}</a><br />
    <a href=''> <b>Link </b>:{item.links.wikipedia}</a>

    
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Clear</Button>
    <Button variant="primary">Save History</Button>
  </Modal.Footer>
</Modal.Dialog>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default History;